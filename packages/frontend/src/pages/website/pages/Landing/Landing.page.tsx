import { Button, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { ExcaliburComponent } from '../../../../@types/React/index';

interface LandingPageProps extends ExcaliburComponent {}

const LandingPage = ({ children, className, style }: LandingPageProps) => {
  return (
    <Stack direction={'column'} justifyContent={'center'} alignItems={'center'}>
      <Text>Landing</Text>
    </Stack>
  );
};

export default LandingPage;
