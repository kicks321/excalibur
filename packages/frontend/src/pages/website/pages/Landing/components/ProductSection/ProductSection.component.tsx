import { Box, Button, ButtonGroup, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { ExcaliburComponent } from '../../../../../../@types/React/index';
import Section from '../../../../components/Section/Section.component';
import Lottie from 'react-lottie';
import animationData from '../../../../../../assets/animation/truck-loading-barn.json';
import { useReactiveVar } from '@apollo/client';
import { applicationStateVar } from '@excalibur/frontend/src/apollo/Cache/ReactiveVarsCache';

type Props = {};

const ProductSection = (props: Props) => {
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
    <Section
      className={'section-product'}
      data-testid="section-product"
      align="center"
      spacing={applicationState.mobile ? 10 : 100}
      direction={applicationState.mobile ? 'column-reverse' : 'row'}
      marginTop={50}>
      <VStack className={'section-hero-left'} data-testid="section-hero-left">
        <Lottie
          options={defaultOptions}
          width={applicationState.mobile ? 400 : 600}
          isClickToPauseDisabled
        />
      </VStack>
      <VStack
        align={'flex-start'}
        spacing={5}
        className={'section-hero-right'}
        data-testid="section-hero-right">
        <Text fontSize={'5xl'} fontWeight="bold">
          Distribution has never been easier.
        </Text>
        <Text fontSize={'2xl'}>
          Transportation companies spend countless hours still relying on the book for proof of
          logistics. Excalibur compiles your neccessary data into an interactive toolbox
          personalized towards a solution for your company.
        </Text>
      </VStack>
    </Section>
  );
};

export default ProductSection;
