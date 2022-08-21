// Library imports
import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// Styles
import './theme.css';

// Global config
const theme = extendTheme({
  components: {
    Button: {
      variants: {
        solid: {
          bg: 'gray.900',
          color: 'gray.100',
          _hover: {
            bg: 'gray.900',
            color: 'gray.300',
          },
        },
        ghost: {
          _hover: {
            color: 'gray.200',
            bg: 'gray.900',
          },
        },
      },
    },
  },
});

type ThemeProviderProps = {
  children?: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeProvider;
