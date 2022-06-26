import './App.css';
import { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';

function App() {
  const { data, loading, error } = useQuery(gql`
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
    </div>
  );
}

export default App;
