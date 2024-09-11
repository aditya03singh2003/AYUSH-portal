import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Sparkles, UserPlus, Briefcase } from 'lucide-react';
import Footer from './Footer';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, var(--background-color), #1a1a4a);
  color: var(--text-color);
`;

const Content = styled(motion.div)`
  max-width: 800px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

const Title = styled(motion.h1)`
  color: var(--primary-color);
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.8);
`;

const OptionContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const OptionButton = styled(motion.button)`
  background-color: var(--primary-color);
  color: var(--background-color);
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
`;

const FeatureList = styled(motion.ul)`
  list-style-type: none;
  padding: 0;
  margin: 2rem 0;
`;

const FeatureItem = styled(motion.li)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const StyledSparkles = styled(Sparkles)`
  color: var(--primary-color);
  margin-right: 1rem;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Registration = () => {
  return (
    <Container
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Content variants={itemVariants}>
        <Title variants={itemVariants}>Welcome to Our Platform</Title>
        <Subtitle variants={itemVariants}>
          Join our thriving community of innovators and industry leaders
        </Subtitle>
        
        <FeatureList>
          <FeatureItem variants={itemVariants}>
            <StyledSparkles size={24} />
            Connect with potential investors and partners
          </FeatureItem>
          <FeatureItem variants={itemVariants}>
            <StyledSparkles size={24} />
            Access exclusive resources and mentorship programs
          </FeatureItem>
          <FeatureItem variants={itemVariants}>
            <StyledSparkles size={24} />
            Showcase your startup to a global audience
          </FeatureItem>
        </FeatureList>
        
        <OptionContainer>
          <Link to="/register-admin">
            <OptionButton variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <UserPlus size={20} />
              Admin Registration
            </OptionButton>
          </Link>
          <Link to="/register-startup">
            <OptionButton variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Briefcase size={20} />
              Startup Registration
            </OptionButton>
          </Link>
        </OptionContainer>
      </Content>
    </Container>
  
    
  );
};

export default Registration;