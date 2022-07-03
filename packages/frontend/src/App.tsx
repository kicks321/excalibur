import './App.css';
import { useEffect, useState } from 'react';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { Button } from '@mui/material';

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
          void getBooks();
        }}>
        Get Data
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
