import { useState, useEffect } from 'react';
import { ref, onValue, set } from 'firebase/database';

import db from './firebase';
import Table from './components/Table';
import Dropdown from './components/Dropdown';

import './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(data?.length || 15);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getEmployees()
      .then((employees) => {
        setData(employees);
      })
      .catch((error) => {
        console.error('Error getting employees:', error);
      });
  }, []);

  /**
   * Fetches employee data from the Firebase Realtime Database.
   *Since, the onVlaue function is async, and doesn't return a Promise, so the await will have no effect on it. This means that getEmployees might return employeeList before onValue has finished fetching the data. To fix this, we can wrap the onValue function in a Promise and resolve it when the data is fetched.
   * @returns {Promise<Array>} A promise that resolves with an array of employees.
   * Each employee is an object containing the employee's data. If there are no employees,
   * the promise resolves with an empty array. If there's an error fetching the employees,
   * the promise is rejected with the error.
   */

  const getEmployees = () => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      const employeesRef = ref(db, 'employees');
      onValue(
        employeesRef,
        (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const employeeList = Object.values(data);
            resolve(employeeList);
          } else {
            resolve([]);
          }
        },
        (error) => {
          reject(error);
        }
      );
    }).finally(() => setLoading(false));
  };

  // const getEmployees = async () => {
  //   const employeesRef = ref(db, 'employees');
  //   let employeeList = [];

  //   await onValue(employeesRef, (snapshot) => {
  //     const data = snapshot.val();
  //     for (let id in data) {
  //       employeeList.push(data[id]);
  //     }
  //   });

  //   return employeeList;
  // };

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
