import React, { useState, useEffect } from 'react';

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
  const [sortInDirection, setSortInDirection] = useState('ascending');
  const [tableData, setTableData] = useState(data);

  const handleSortDirection = () => {
    setSortInDirection((prevDirection) =>
      prevDirection === 'ascending' ? 'descending' : 'ascending'
    );
  };

  useEffect(() => {
    setTableData(data?.slice(0, rowsPerPage));
  }, [rowsPerPage, data]);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th}>Name</th>
          <th className={styles.th}>Address</th>
          <th className={styles.th}>Phone Number</th>
          <th className={styles.th}>Employee ID</th>
          <th className={styles.th}>Role</th>
          <th className={styles.th} style={{ cursor: 'pointer' }} onClick={handleSortDirection}>
            Experience{' '}
            {sortInDirection === 'ascending' ? (
              <span>&uarr;</span> // Up arrow for increment
            ) : (
              <span>&darr;</span> // Down arrow for decrement
            )}
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData
          ?.sort((a, b) =>
            sortInDirection === 'ascending'
              ? a.Experience - b.Experience
              : b.Experience - a.Experience
          )
          ?.map((item, index) => (
            <tr key={index}>
              <td className={styles.td}>{item?.Name || 'Unknown'}</td>
              <td className={styles.td}>{item?.Address || 'Unknown'}</td>
              <td className={styles.td}>{item?.PhoneNumber || 'Unknown'}</td>
              <td className={styles.td}>{item?.EmployeeID || 'Unknown'}</td>
              <td className={styles.td}>{item?.Role || 'Unknown'}</td>
              <td className={styles.td}>{item?.Experience || 'Unknown'}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
