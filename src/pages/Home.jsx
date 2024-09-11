import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedCube from '../AnimatedCube';


const Hero = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-color);
  text-align: center;
  background: linear-gradient(45deg, var(--background-color), #1a1a4a);
  overflow: hidden;
  position: relative;
`;

const HeroContent = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 3rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Button = styled(motion.button)`
  background-color: var(--primary-color);
  color: var(--background-color);
  border: none;
  margin:10px;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(255, 255, 0, 0.4);
  }
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background-color: ${props => props.color};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  opacity: 0.6;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Hero>
      <FloatingShape
        color="var(--primary-color)"
        size={100}
        animate={{
          x: [0, 100, 0],
          y: [0, 100, 0],
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ top: '10%', left: '10%' }}
      />
      <FloatingShape
        color="var(--secondary-color)"
        size={150}
        animate={{
          x: [0, -150, 0],
          y: [0, 150, 0],
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ bottom: '10%', right: '10%' }}
      />
      <HeroContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Welcome to AYUSH Startup Registration Portal
        </Title>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Register your startup with ease and track your progress in our futuristic platform.
        </Subtitle>
        {/* Existing Link to Register Page */}
        <Link to="/register">
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </Button>
        </Link>
        {/* New Button to Navigate to Dashboard */}
        <Button
          onClick={() => navigate('/dashboard')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Go to Dashboard
        </Button>
      </HeroContent>
    </Hero>
  );
};

export default Home;
