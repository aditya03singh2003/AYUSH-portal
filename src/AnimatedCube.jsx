import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

const CubeContainer = styled(motion.div)`
  width: 200px;
  height: 200px;
  perspective: 1000px;
  margin: 2rem auto;
`;

const Cube = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
`;

const Face = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(0, 255, 255, 0.3);
  border: 2px solid #00ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #ffffff;
`;

const AnimatedCube = () => {
  const controls = useAnimation();
  const cubeRef = useRef(null);

  useEffect(() => {
    controls.start({
      rotateY: 360,
      transition: { duration: 10, repeat: Infinity, ease: "linear" }
    });
  }, [controls]);

  return (
    <CubeContainer>
      <Cube ref={cubeRef} animate={controls}>
        <Face style={{ transform: 'rotateY(0deg) translateZ(100px)' }}>AYUSH</Face>
        <Face style={{ transform: 'rotateY(90deg) translateZ(100px)' }}>Portal</Face>
        <Face style={{ transform: 'rotateY(180deg) translateZ(100px)' }}>Startup</Face>
        <Face style={{ transform: 'rotateY(-90deg) translateZ(100px)' }}>Register</Face>
        <Face style={{ transform: 'rotateX(90deg) translateZ(100px)' }}>Now</Face>
        <Face style={{ transform: 'rotateX(-90deg) translateZ(100px)' }}>2024</Face>
      </Cube>
    </CubeContainer>
  );
};

export default AnimatedCube;