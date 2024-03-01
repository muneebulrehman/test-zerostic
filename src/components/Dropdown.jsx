import React from 'react';

/**
 * Dropdown component for selecting the number of rows to display.
 *
 * @param {Object} props - The props for the component.
 * @param {Array} props.data - The data for the dropdown options.
 * @param {number} props.rowsPerPage - The current number of rows per page.
 * @param {Function} props.setRowsPerPage - Function to set the number of rows per page.
 *
 * @returns {React.Element} The Dropdown component.
 *
 * @example
 * <Dropdown data={[1, 2, 3, 4, 5]} rowsPerPage={2} setRowsPerPage={setRowsPerPage} />
 */

const Dropdown = ({ data, rowsPerPage, setRowsPerPage }) => {
  /**
   * Event handler for the dropdown's change event. Updates the number of rows per page.
   *
   * @param {Object} event - The event object.
   */
  const handleChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ marginRight: '20px' }}>Rows to display:</label>
      <select
        value={rowsPerPage}
        onChange={handleChange}
        style={{ padding: '5px', fontSize: '16px' }}>
        {data?.map((_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
