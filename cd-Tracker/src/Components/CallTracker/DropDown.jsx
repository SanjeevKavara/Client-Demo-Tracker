import React, { useState } from 'react';

const DropDown = () => {
  // State to manage the selected value
  const [selectedValue, setSelectedValue] = useState('');

  // Event handler for dropdown change
  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={selectedValue} onChange={handleDropdownChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <p>You selected: {selectedValue}</p>
    </div>
  );
};

export default DropDown;
