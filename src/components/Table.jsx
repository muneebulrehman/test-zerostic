import React from 'react';

import styles from './table.module.css';

/**
 * Table component for displaying employee data.
 *
 * @param {Object} props - The props for the component.
 * @param {Array} props.data - The employee data to display in the table.
 * @param {number} props.rowsPerPage - The number of rows to display per page.
 *
 * @returns {React.Element} The Table component.
 *
 * @example
 * <Table data={employeeData} rowsPerPage={10} />
 */

const Table = ({ data, rowsPerPage }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th}>Name</th>
          <th className={styles.th}>Address</th>
          <th className={styles.th}>Phone Number</th>
          <th className={styles.th}>Employee ID</th>
          <th className={styles.th}>Role</th>
          <th className={styles.th}>Experience</th>
        </tr>
      </thead>
      <tbody>
        {data?.slice(0, rowsPerPage)?.map((item, index) => (
          <tr key={index}>
            <td className={styles.td}>{item.Name}</td>
            <td className={styles.td}>{item.Address}</td>
            <td className={styles.td}>{item.PhoneNumber}</td>
            <td className={styles.td}>{item.EmployeeID}</td>
            <td className={styles.td}>{item.Role}</td>
            <td className={styles.td}>{item.Experience}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
