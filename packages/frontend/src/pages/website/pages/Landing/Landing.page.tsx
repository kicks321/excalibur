import { Box, Button, ButtonGroup, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { ExcaliburComponent } from '../../../../@types/React/index';
import { useReactiveVar } from '@apollo/client';
import { applicationStateVar } from '@excalibur/frontend/src/apollo/Cache/ReactiveVarsCache';
import { useState } from 'react';
import { HeroSection, SolutionsSection, ProductSection } from './components';

interface LandingPageProps extends ExcaliburComponent {}

const LandingPage = ({ children, className, style }: LandingPageProps) => {
  const applicationState = useReactiveVar(applicationStateVar);

  return (
    <Stack
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      style={{ height: '100%' }}>
      <HeroSection />
      <SolutionsSection />
      <ProductSection />
    </Stack>
  );
};

export default LandingPage;
