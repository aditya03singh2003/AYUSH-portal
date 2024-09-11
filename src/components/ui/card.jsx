// src/components/ui/card.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledCard = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Card = StyledCard;
export const CardHeader = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;
export const CardContent = styled.div`
  font-size: 14px;
`;
