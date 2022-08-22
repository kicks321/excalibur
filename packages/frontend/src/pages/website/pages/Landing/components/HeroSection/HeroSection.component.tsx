import { Box, Button, ButtonGroup, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { ExcaliburComponent } from '../../../../../../@types/React/index';
import Section from '../../../../components/Section/Section.component';
import Lottie from 'react-lottie';
import animationData from '../../../../../../assets/animation/truck-loader.json';
import { useReactiveVar } from '@apollo/client';
import { applicationStateVar } from '@excalibur/frontend/src/apollo/Cache/ReactiveVarsCache';

type Props = {};

const HeroSection = (props: Props) => {
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
      className={'section-hero'}
      data-testid="section-hero"
      minHeight={'100vh'}
      paddingBottom={100}
      spacing={applicationState.mobile ? 10 : 100}
      direction={applicationState.mobile ? 'column-reverse' : 'row'}>
      <VStack className={'section-hero-left'} data-testid="section-hero-left">
        <Lottie
          options={defaultOptions}
          width={applicationState.mobile ? 400 : 700}
          isClickToPauseDisabled
        />
      </VStack>
      <VStack
        align={'flex-start'}
        spacing={5}
        className={'section-hero-right'}
        data-testid="section-hero-right">
        <VStack alignItems={'flex-start'} spacing={1}>
          <Text>Distribution analytics made easy.</Text>
          <Text fontSize={'8xl'}>Excalibur</Text>
          <Text fontSize="2xl">Transportation</Text>
        </VStack>
        <ButtonGroup>
          <Button>Get a demo</Button>
          <Button variant={'outline'}>Learn More</Button>
        </ButtonGroup>
      </VStack>
    </Section>
  );
};

export default HeroSection;
