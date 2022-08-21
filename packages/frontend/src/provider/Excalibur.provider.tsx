import React, { useEffect, useMemo, useState } from 'react';
import { useReactiveVar } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { useMediaQuery } from '@chakra-ui/react';
import { applicationStateVar } from '../apollo/Cache/ReactiveVarsCache';

type ExcaliburProviderProps = {
  children?: React.ReactNode;
};

type ExcaliburContextProps = {
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const ExcaliburContext = React.createContext<ExcaliburContextProps>({
  authenticated: false,
  setAuthenticated: () => null,
});

const ExcaliburProvider = ({ children }: ExcaliburProviderProps) => {
  const applicationState = useReactiveVar(applicationStateVar);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [isDesktopWidth] = useMediaQuery('(min-width: 1200px)');

  // Checks the viewport of the browsers size, utilizes the window.watchMedia component natively
  // See: https://chakra-ui.com/docs/hooks/use-media-query
  // See: https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
  useEffect(() => {
    applicationStateVar({
      ...applicationState,
      mobile: !isDesktopWidth,
    });
  }, [isDesktopWidth]);

  const value = useMemo(
    () => ({
      authenticated,
      setAuthenticated,
    }),
    [],
  );

  return (
    <ExcaliburContext.Provider value={value}>
      <Router>{children}</Router>
    </ExcaliburContext.Provider>
  );
};

export default ExcaliburProvider;
