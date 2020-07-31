import React from 'react';
import Select from 'react-select';

// theme
import theme from '../../theme';

const CustomSelect = ({ styles, components, options, ...rest }) => {
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
    }),

    ...styles,
  };

  return (
    <Select
      className="select"
      options={options}
      styles={customSelectStyles}
      components={{
        ...components,
        IndicatorSeparator: () => null,
      }}
      {...rest}
    />
  );
};

export default CustomSelect;
