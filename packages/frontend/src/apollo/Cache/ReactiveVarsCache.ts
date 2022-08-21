import { makeVar } from '@apollo/client';

export type ApplicationState = {
  mobile?: boolean;
  darkMode?: boolean;
};

// Create Reactive variable
export const ApplicationStatePolicy = {
  applicationState: {
    read() {
      return applicationStateVar();
    },
  },
};

export const applicationStateVar = makeVar<ApplicationState>({
  mobile: false,
  darkMode: false,
});
