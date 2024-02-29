import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';

import db from './firebase';

import './App.css';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getEmployees()
      .then((employees) => {
        setData(employees);
      })
      .catch((error) => {
        console.error('Error getting employees:', error);
      });
  }, []);

  console.log(data);

  // Function to get employees from the Firebase Realtime Database. Since, the onVlaue function is async, and doesn't return a Promise, so the await will have no effect on it. This means that getEmployees might return employeeList before onValue has finished fetching the data. To fix this, we can wrap the onValue function in a Promise and resolve it when the data is fetched.

  const getEmployees = () => {
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
    });
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
      <div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </div>
    </>
  );
};

export default App;
