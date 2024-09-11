import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Leaf, Sun, Wind, Droplet, Heart } from 'lucide-react';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled(motion.div)`
  max-width: 800px;
  margin: auto;
  padding: 2rem;
  line-height: 1.6;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(45deg, var(--background-color), #1a1a4a, #2a2a6a);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 10s ease infinite;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  border-bottom: 2px solid #00bcd4;
  padding-bottom: 0.5rem;
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
`;

const Paragraph = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #e0e0e0;
`;

const BoldText = styled.span`
  font-weight: bold;
  color: #00ffff;
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

const IconBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 1rem;
`;

const IconText = styled(motion.span)`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #00ffff;
`;

const ContactBox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem;
  margin-top: 2rem;
  backdrop-filter: blur(5px);
`;

const ContactTitle = styled.h3`
  color: #00ffff;
  margin-bottom: 0.5rem;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #e0e0e0;
`;

const IconContainer = styled.div`
  margin-right: 0.5rem;
`;

const ministries = [
  { name: 'Ayurveda', icon: Leaf, email: 'ayurveda@ayush.gov.in', phone: '+91-11-1234-5678' },
  { name: 'Yoga', icon: Sun, email: 'yoga@ayush.gov.in', phone: '+91-11-2345-6789' },
  { name: 'Naturopathy', icon: Wind, email: 'naturopathy@ayush.gov.in', phone: '+91-11-3456-7890' },
  { name: 'Unani', icon: Droplet, email: 'unani@ayush.gov.in', phone: '+91-11-4567-8901' },
  { name: 'Homeopathy', icon: Heart, email: 'homeopathy@ayush.gov.in', phone: '+91-11-5678-9012' },
];

const Contact = () => {
  const [selectedMinistry, setSelectedMinistry] = useState(null);

  return (
    <Container
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Contact AYUSH Portal
      </Title>
      <Paragraph
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Welcome to the <BoldText>AYUSH Portal Contact Page</BoldText>. Here you can find contact information for all AYUSH ministries. If you have any questions or need assistance, please don't hesitate to reach out to the respective ministry through the contact information provided below.
      </Paragraph>
      <IconWrapper>
        {ministries.map((ministry, index) => (
          <IconBox
            key={ministry.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedMinistry(ministry)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
            >
              <ministry.icon size={32} color="#00ffff" />
            </motion.div>
            <IconText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
            >
              {ministry.name}
            </IconText>
          </IconBox>
        ))}
      </IconWrapper>
      {selectedMinistry && (
        <ContactBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ContactTitle>{`Ministry of ${selectedMinistry.name}`}</ContactTitle>
          <ContactInfo>
            <IconContainer><Mail size={16} color="#00ffff" /></IconContainer>
            <a href={`mailto:${selectedMinistry.email}`} style={{ color: '#00ffff' }}>{selectedMinistry.email}</a>
          </ContactInfo>
          <ContactInfo>
            <IconContainer><Phone size={16} color="#00ffff" /></IconContainer>
            <a href={`tel:${selectedMinistry.phone}`} style={{ color: '#00ffff' }}>{selectedMinistry.phone}</a>
          </ContactInfo>
        </ContactBox>
      )}
      <Paragraph
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        For general inquiries, you can also reach us at our main contact line:
      </Paragraph>
      <ContactBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <ContactTitle>General Inquiries</ContactTitle>
        <ContactInfo>
          <IconContainer><Mail size={16} color="#00ffff" /></IconContainer>
          <a href="mailto:contact@ayushportal.com" style={{ color: '#00ffff' }}>contact@ayushportal.com</a>
        </ContactInfo>
        <ContactInfo>
          <IconContainer><Phone size={16} color="#00ffff" /></IconContainer>
          <a href="tel:+911234567890" style={{ color: '#00ffff' }}>+91-123-456-7890</a>
        </ContactInfo>
        <ContactInfo>
          <IconContainer><Clock size={16} color="#00ffff" /></IconContainer>
          Monday to Friday, 9:00 AM to 5:00 PM IST
        </ContactInfo>
        <ContactInfo>
          <IconContainer><MapPin size={16} color="#00ffff" /></IconContainer>
          AYUSH Bhawan, New Delhi, India
        </ContactInfo>
      </ContactBox>
      <Paragraph
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        We look forward to assisting you with your queries and helping you navigate the world of AYUSH healthcare and wellness.
      </Paragraph>
    </Container>
  );
};

export default Contact;