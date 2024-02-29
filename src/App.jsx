import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import db from './firebase';

import './App.css';

function App() {
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

  const getEmployees = async () => {
    const employeesCollection = collection(db, 'employees');
    const employeeSnapshot = await getDocs(employeesCollection);
    const employeeList = employeeSnapshot.docs.map((doc) => doc.data());
    return employeeList;
  };

  return (
    <>
      <div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </div>
    </>
  );
}

export default App;
