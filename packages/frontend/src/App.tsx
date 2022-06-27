import './App.css';
import { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';

type Books = {
  books: {
    title?: string;
  }[];
};

function App() {
  const { data, loading, error } = useQuery<Books>(gql`
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
    </div>
  );
}

export default App;
