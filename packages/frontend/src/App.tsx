import './App.css';
import { useEffect, useState } from 'react';
import { gql, useApolloClient, useLazyQuery, useQuery } from '@apollo/client';
import { Button } from '@mui/material';
import axios from 'axios';

type Books = {
  books: {
    title?: string;
  }[];
};

function App() {
  const [apiError, setApiError] = useState(false);
  const { data } = useQuery<Books>(gql`
    query ExampleQuery {
      books {
        title
      }
    }
  `);

  const [getBooks, { data: lazyData, loading, error }] = useLazyQuery<Books>(gql`
    query ExampleQuery {
      books {
        title
      }
    }
  `);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
    if (error) {
      setApiError(true);
      console.log('Use Effect', error.message);
    }
    console.log('Use effectinggggg');
  }, [data, error]);

  return (
    <div className="App">
      <div>Excaliber Frontend</div>
      {data && data.books.map((book, index) => <h2>{book.title}</h2>)}
      <Button
        onClick={() => {
          getBooks()
            .then((res) => {
              if (res.error) {
                console.error('[excalibur] Error: failed to get books. ', res.error);
              }
              console.log('[excalibur] Data:', res);
            })
            .catch((err) => console.error('[excalibur] Error: failed to get books. ', err));
        }}>
        Get Data
      </Button>
      <Button
        onClick={() => {
          const client = axios.create({
            baseURL: 'http://localhost:4000',
          });

          void client
            .get('/healthcheck')
            .then((res) => console.log('Data: ', res.data))
            .catch((err) => console.error('Error: ', err));
        }}>
        Check State
      </Button>
      {lazyData && lazyData.books.map((book, index) => <h2>{book.title}</h2>)}
      {apiError && (
        <div>
          <h1>Error</h1>
          <div>{apiError}</div>
        </div>
      )}
    </div>
  );
}

export default App;
