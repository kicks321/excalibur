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
  }, [data]);

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
      {error && <div>{error.message}</div>}
    </div>
  );
}

export default App;
