import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled(motion.footer)`
  background: rgba(10, 10, 42, 0.8);
  backdrop-filter: blur(10px);
  color: var(--text-color);
  padding: 1rem 0;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

const Footer = () => {
  return (
    <FooterContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p>&copy; 2024 AYUSH Portal. Empowering startups of the future.</p>
    </FooterContainer>
  );
};

export default Footer;