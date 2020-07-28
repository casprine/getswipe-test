import React, { Fragment } from 'react';

const ButtonGroup = ({ children }) => {
  return (
    <div className="button-group">
      {children.map((child, index) => {
        let className;

        if (index === 0) {
          className = 'btn-grp-first';
        } else if (index === children.length - 1) {
          className = 'btn-grp-last';
        } else className = 'btn-grp-middle';

        return <Fragment key={index}>{React.cloneElement(child, { key: index, className })}</Fragment>;
      })}
    </div>
  );
};

export default ButtonGroup;
