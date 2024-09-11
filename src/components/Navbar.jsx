import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled(motion.nav)`
  background: rgba(10, 10, 42, 0.8);
  backdrop-filter: blur(10px);
  color: var(--text-color);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled(motion.li)`
  margin-left: 2rem;
`;

const NavLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary-color);
    color: var(--background-color);
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 255, 255, 0.4);
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  }
`;

const Navbar = () => {
  return (
    <Nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo to="/">AYUSH Portal</Logo>
      <NavLinks>
        {['Home', 'Register', 'Dashboard','About', 'Contact'].map((item) => (
          <NavItem
            key={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>{item}</NavLink>
          </NavItem>
        ))}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;