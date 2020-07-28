import React from 'react';
import styled from 'styled-components';

import { CloseIcon } from '../icons';

const Header = () => {
  return (
    <Nav>
      <div className="container">
        <div className="header">
          <h3 className="black-text">Create Invoice</h3>
          <span className="subtext gray-text">Last saved 16 minutes ago</span>
        </div>

        <div tabIndex="1" className="close-icon-container rounded">
          <CloseIcon />
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};

  .container {
    display: flex;
    justify-content: space-between;
  }

  .header {
    display: flex;

    h3 {
      margin-right: 20px;
      line-height: 30px;
      display: block;
    }

    .subtext {
      display: block;
      font-size: 13px;
      font-weight: 500;
      line-height: 30px;
    }
  }

  .close-icon-container {
    padding: ${({ theme }) => theme.padding.sm};
    background-color: ${({ theme }) => theme.colors.gray200};
    cursor: pointer;
  }
`;

export default Header;
