import React from 'react';
import Select from 'react-select';

// theme
import theme from '../../theme';

const CustomSelect = ({ options, ...rest }) => {
  const customSelectStyles = {
    container: (styles) => ({
      ...styles,
      borderWidth: 0,
    }),
    control: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: 'white',
      borderColor: isFocused ? theme.colors.primaryBlue : theme.colors.gray300,
      boxShadow: 'none',
      // borderWidth: 0,
    }),
  };

  return (
    <Select
      className="select"
      options={options}
      defaultValue={options[0]}
      styles={customSelectStyles}
      components={{
        IndicatorSeparator: () => null,
      }}
      {...rest}
    />
  );
};

export default CustomSelect;
