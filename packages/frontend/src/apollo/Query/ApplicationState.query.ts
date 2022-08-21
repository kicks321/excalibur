import { gql } from '@apollo/client';

export const QUERY_APPLICATION_STATE = gql`
  query GetApplicationState {
    applicationState @client {
      mobile
      darkMode
    }
  }
`;
