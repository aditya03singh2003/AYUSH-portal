import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: none;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--text-color);
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const InputIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 0.75rem;
  transform: translateY(-50%);
  color: var(--primary-color);
`;

const ErrorMessage = styled(motion.p)`
  color: var(--secondary-color);
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  color: var(--background-color);
  padding: 0.75rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-weight: bold;

  &:hover {
    background-color: var(--accent-color);
  }
`;

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      staggerChildren: 0.1
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const AdminRegistrationForm = () => {
  const [formData, setFormData] = useState({
    adminName: '',
    adminEmail: '',
    adminPassword: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };
    switch (name) {
      case 'adminName':
        newErrors.adminName = value.trim() === '' ? 'Admin name is required' : '';
        break;
      case 'adminEmail':
        newErrors.adminEmail = !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value) 
          ? 'Invalid email address' 
          : '';
        break;
      case 'adminPassword':
        newErrors.adminPassword = value.length < 6 
          ? 'Password must be at least 6 characters long' 
          : '';
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).every(error => error === '') && Object.values(formData).every(field => field)) {
      // Handle form submission logic here
      navigate('/admin-success');
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      initial="hidden"
      animate="visible"
      variants={formVariants}
    >
      <InputWrapper>
        <InputIcon><User size={18} /></InputIcon>
        <Input
          type="text"
          name="adminName"
          placeholder="Admin Name"
          value={formData.adminName}
          onChange={handleChange}
          required
        />
        {errors.adminName && <ErrorMessage variants={itemVariants}>{errors.adminName}</ErrorMessage>}
      </InputWrapper>
      
      <InputWrapper>
        <InputIcon><Mail size={18} /></InputIcon>
        <Input
          type="email"
          name="adminEmail"
          placeholder="Admin Email"
          value={formData.adminEmail}
          onChange={handleChange}
          required
        />
        {errors.adminEmail && <ErrorMessage variants={itemVariants}>{errors.adminEmail}</ErrorMessage>}
      </InputWrapper>
      
      <InputWrapper>
        <InputIcon><Lock size={18} /></InputIcon>
        <Input
          type="password"
          name="adminPassword"
          placeholder="Password"
          value={formData.adminPassword}
          onChange={handleChange}
          required
        />
        {errors.adminPassword && <ErrorMessage variants={itemVariants}>{errors.adminPassword}</ErrorMessage>}
      </InputWrapper>
      
      <Button 
        type="submit"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Register Admin <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
      </Button>
    </Form>
  );
};

export default AdminRegistrationForm;