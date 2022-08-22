import { Box, Button, ButtonGroup, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { ExcaliburComponent } from '../../../../../../@types/React/index';
import Section from '../../../../components/Section/Section.component';
import Lottie from 'react-lottie';
import animationData from '../../../../../../assets/animation/truck-loader.json';
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
      spacing={0}
      align="center"
      direction={'row'}
      paddingLeft={75}
      paddingRight={75}>
      <VStack>
        <Text fontSize={'5xl'} fontWeight="bold">
          Distribution of your product isn't suppose to difficult...
        </Text>
      </VStack>
      <VStack align="flex-start">
        <Text fontSize={'5xl'} fontWeight="bold">
          Distribution of your product isn't suppose to difficult...
        </Text>
        <Text fontSize={'2xl'}>
          Transportation companies spend countless hours still relying on the book for proof of
          logistics. Analytics are not meant to be spreadsheets with hours of streamlining graphs to
          project outcome. Excalibur helps with that. Excalibur compiles all the unneccessary data
          tracking tools into one simple toolbox personalized for your company's needs.
        </Text>
      </VStack>
    </Section>
  );
};

export default SolutionsSection;
