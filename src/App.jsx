import { useState, useEffect } from 'react';
import { ref, onValue, off } from 'firebase/database';

import db from './firebase';
import Table from './components/Table';
import Dropdown from './components/Dropdown';

import './App.css';

/**
 * App component that fetches employee data from Firebase Realtime Database and displays it in a table.
 * The number of rows to display can be selected from a dropdown.
 *
 * @returns {React.Element} The App component.
 *
 * @example
 * <App />
 */

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(data?.length || 15);
  const [error, setError] = useState(null);

  /**
   * `useEffect` hook for fetching employee data from Firebase Realtime Database.
   *
   * One of the most common issue one might face using Firebase Realtime Database is data not updating in the UI when it changes in the database. This is because the onValue function listens for changes to the data in the database, but it doesn't automatically update the UI when the data changes. To fix this, you can use the useEffect hook to listen for changes to the data and update the UI when the data changes.
   * 1. Ensuring we are using onvalue correctly.The onValue function takes a callback that is invoked every time the data changes. Make sure you're correctly setting up this listener and updating your component's state in the callback.
   * 2. Using the useEffect hook to listen for changes to the data and update the UI when the data changes. The useEffect hook allows us to perform side effects in function components, such as fetching data, subscribing to events, or updating the DOM. We can use the useEffect hook to listen for changes to the data in the database and update the component's state when the data changes.
   *
   * When the component mounts, it sets up a real-time listener on the 'employees' reference in the database. When the data changes, it updates the `data` state with the new data and sets `loading` to false.
   *
   *When the component mounts, it sets up a real-time listener on the 'employees' reference in the database. When the data changes, it updates the `data` state with the new data and sets * `loading` to false.
   *
   * When the component unmounts, it removes the listener and sets `loading` to false.
   */

  useEffect(() => {
    setRowsPerPage(data?.length || 15);
  }, [data]);

  useEffect(() => {
    setLoading(true);
    const employeesRef = ref(db, 'employees');

    const listener = onValue(
      employeesRef,
      (snapshot) => {
        const newData = snapshot.val();
        if (newData) {
          const employeeList = Object.values(newData);
          setData(employeeList);
        } else {
          setData([]);
        }
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching employees:', error);
        setError(error);
        setLoading(false);
      }
    );

    return () => {
      off(employeesRef, listener);
    };
  }, []);

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Dropdown data={data} rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} />
          <Table data={data} rowsPerPage={rowsPerPage} />
        </div>
      )}
    </>
  );
};

export default App;
