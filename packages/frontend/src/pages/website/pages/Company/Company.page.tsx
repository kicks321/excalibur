import { Button, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { ExcaliburComponent } from '../../../../@types/React/index';

interface CompanyPageProps extends ExcaliburComponent {}

const CompanyPage = ({ children, className, style }: CompanyPageProps) => {
  return (
    <Stack direction={'column'} justifyContent={'center'} alignItems={'center'}>
      <Text>Company</Text>
    </Stack>
  );
};

export default CompanyPage;
