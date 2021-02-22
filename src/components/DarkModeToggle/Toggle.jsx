import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

const Toggle = ({ checked, onChange }) => {
  return <DarkModeToggle checked={checked} onChange={onChange} />;
};

export default Toggle;
