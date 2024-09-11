import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Leaf, Sun, Wind, Droplet, Heart } from 'lucide-react';

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
`;

const IconBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const IconText = styled(motion.span)`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #00ffff;
`;

const FactBox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem;
  margin-top: 2rem;
  backdrop-filter: blur(5px);
`;

const FactTitle = styled.h3`
  color: #00ffff;
  margin-bottom: 0.5rem;
`;

const About = () => {
  const [selectedFact, setSelectedFact] = useState(null);

  const facts = [
    { icon: Leaf, text: "Ayurveda", content: "Ayurveda, meaning 'science of life', is a 5000-year-old system of natural healing." },
    { icon: Sun, text: "Yoga", content: "Yoga combines physical postures, breathing techniques, and meditation to promote overall well-being." },
    { icon: Wind, text: "Naturopathy", content: "Naturopathy emphasizes the body's inherent ability to heal itself through natural means." },
    { icon: Droplet, text: "Unani", content: "Unani medicine, originating from ancient Greece, focuses on the balance of bodily fluids." },
    { icon: Heart, text: "Homeopathy", content: "Homeopathy is based on the principle of 'like cures like', using highly diluted substances." },
  ];

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
        About AYUSH Portal
      </Title>
      <Paragraph
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        The <BoldText>AYUSH Portal</BoldText>, an initiative introduced by the Government of India, is dedicated to supporting startups in the fields of <BoldText>Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy</BoldText>. The portal serves as a central hub for innovation and entrepreneurship in these traditional systems of medicine, aiming to modernize and globalize these ancient practices while preserving their rich heritage.
      </Paragraph>
      <IconWrapper>
        {facts.map((fact, index) => (
          <IconBox
            key={fact.text}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedFact(fact)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
            >
              <fact.icon size={32} color="#00ffff" />
            </motion.div>
            <IconText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
            >
              {fact.text}
            </IconText>
          </IconBox>
        ))}
      </IconWrapper>
      {selectedFact && (
        <FactBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FactTitle>{selectedFact.text}</FactTitle>
          <Paragraph>{selectedFact.content}</Paragraph>
        </FactBox>
      )}
      <Paragraph
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        The <BoldText>AYUSH Portal</BoldText> offers a streamlined registration process that simplifies the entry of startups into the AYUSH ecosystem. Through this platform, entrepreneurs can not only register their ventures but also access a variety of tools designed to track and manage their progress through the application and approval process.
      </Paragraph>
      <Paragraph
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        With the backing of the Indian government, the <BoldText>AYUSH Portal</BoldText> is poised to play a pivotal role in the global recognition and adoption of these traditional healing systems. Whether you're an entrepreneur or a practitioner, the AYUSH Portal provides the infrastructure and support you need to succeed in this innovative field.
      </Paragraph>
    </Container>
  );
};

export default About;