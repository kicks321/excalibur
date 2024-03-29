import { Box, Button, ButtonGroup, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { ExcaliburComponent } from '../../../../../../@types/React/index';
import Section from '../../../../components/Section/Section.component';
import Lottie from 'react-lottie';
import animationData from '../../../../../../assets/animation/truck-analytics.json';
import { useReactiveVar } from '@apollo/client';
import { applicationStateVar } from '@excalibur/frontend/src/apollo/Cache/ReactiveVarsCache';

type Props = {};

const SolutionsSection = (props: Props) => {
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
      align="center"
      spacing={applicationState.mobile ? 10 : 100}
      direction={applicationState.mobile ? 'column' : 'row'}>
      <VStack>
        <Text fontSize={'5xl'} fontWeight="bold">
          Distribution has never been easier.
        </Text>
        <Text fontSize={'2xl'}>
          Transportation companies spend countless hours still relying on the book for proof of
          logistics. Excalibur compiles your neccessary data into an interactive toolbox
          personalized towards a solution for your company.
        </Text>
      </VStack>
      <VStack align="flex-start">
        <Lottie
          options={defaultOptions}
          width={applicationState.mobile ? 400 : 700}
          isClickToPauseDisabled
        />
      </VStack>
    </Section>
  );
};

export default SolutionsSection;
