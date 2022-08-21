import { Button, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { ExcaliburComponent } from '../../../../@types/React/index';

interface PricingPageProps extends ExcaliburComponent {}

const PricingPage = ({ children, className, style }: PricingPageProps) => {
  return (
    <Stack direction={'column'} justifyContent={'center'} alignItems={'center'}>
      <Text>Pricing</Text>
    </Stack>
  );
};

export default PricingPage;
