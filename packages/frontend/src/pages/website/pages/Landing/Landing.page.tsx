import { Box, Button, ButtonGroup, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { ExcaliburComponent } from '../../../../@types/React/index';
import Section from '../../components/Section/Section.component';
import Lottie from 'react-lottie';
import animationData from '../../../../assets/animation/truck-loader.json';
import { useReactiveVar } from '@apollo/client';
import { applicationStateVar } from '@excalibur/frontend/src/apollo/Cache/ReactiveVarsCache';
import { useState } from 'react';
import { HeroSection, SolutionsSection } from './components';

interface LandingPageProps extends ExcaliburComponent {}

const LandingPage = ({ children, className, style }: LandingPageProps) => {
  const applicationState = useReactiveVar(applicationStateVar);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Stack
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      style={{ height: '100%' }}>
      <HeroSection />
      <SolutionsSection />
    </Stack>
  );
};

export default LandingPage;
