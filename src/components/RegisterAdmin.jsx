import React from 'react';
import AdminRegistrationForm from '../components/AdminRegistrationForm';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  padding: 2rem;
  background: rgba(10, 10, 42, 0.8);
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  color: var(--text-color);
  margin: 2rem;
`;

const Title = styled(motion.h1)`
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const RegisterAdmin = () => {
  return (
    <Container
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Admin Registration
      </Title>
      <AdminRegistrationForm />
    </Container>
  );
};

export default RegisterAdmin;
