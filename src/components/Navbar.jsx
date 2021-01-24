import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <StyledNavbar className='navbar navbar-expand-lg navbar-dark bg-success bg-gradient-success'>
      <Link
        className='nav-link dropdown-toggle text-warning'
        to='/'
        id='navbarDropdown'
        role='button'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'>
        <i class='fas fa-bars' />
      </Link>

      <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
        <Link className='dropdown-item' to='/profile'>
          Profile
        </Link>
        <Link className='dropdown-item' to='/messages'>
          Messages
        </Link>
        <Link className='dropdown-item' to='/musik'>
          Music
        </Link>
        <Link className='dropdown-item' to='news'>
          News
        </Link>
        <Link className='dropdown-item' to='/users'>
          Users
        </Link>
        <Link className='dropdown-item' to='/settings'>
          Settings
        </Link>
      </div>
      <div>
        <Link
          className='navbar-brand'
          style={{ color: 'var(--warning)' }}
          to='/'>
          bootstrap social network
        </Link>
      </div>

      <div className='login-button'>
        <button className='btn btn-outline-warning my-2 my-sm-0' type='submit'>
          Login
        </button>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  color: var(--warning);

  .login-button {
    position: absolute;
    right: 15px;
  }

  .navbar-brand {
    text-transform: uppercase;
  }
`;
