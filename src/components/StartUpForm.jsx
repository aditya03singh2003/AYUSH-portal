import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { User, Mail, Briefcase, FileText, ArrowRight } from 'lucide-react';

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  max-width: 500px;
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

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 100px;
  resize: vertical;
`;

const InputIcon = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  color: var(--primary-color);
`;

const FileInput = styled.div`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 2px solid var(--primary-color);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--text-color);
  font-size: 1rem;
  cursor: pointer;
  box-sizing: border-box;

  input[type="file"] {
    display: none;
  }
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

const StartupRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    startupName: '',
    description: '',
    documents: null,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, documents: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate('/startup-success');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <InputIcon><User size={18} /></InputIcon>
        <Input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </InputWrapper>
      
      <InputWrapper>
        <InputIcon><Mail size={18} /></InputIcon>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </InputWrapper>
      
      <InputWrapper>
        <InputIcon><Briefcase size={18} /></InputIcon>
        <Input
          type="text"
          name="startupName"
          placeholder="Startup Name"
          value={formData.startupName}
          onChange={handleChange}
          required
        />
      </InputWrapper>

      <InputWrapper>
        <InputIcon><FileText size={18} /></InputIcon>
        <TextArea
          name="description"
          placeholder="Describe your startup (min 50 characters)"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </InputWrapper>
      
      <InputWrapper>
        <FileInput>
          <InputIcon><FileText size={18} /></InputIcon>
          <label htmlFor="file-upload">
            {formData.documents ? formData.documents.name : 'Choose File'}
          </label>
          <input
            id="file-upload"
            type="file"
            name="documents"
            onChange={handleFileChange}
            required
          />
        </FileInput>
        {!formData.documents && (
          <ErrorMessage>Please upload relevant documents</ErrorMessage>
        )}
      </InputWrapper>

      <Button type="submit">
        Register Startup <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
      </Button>
    </Form>
  );
};

export default StartupRegistrationForm;