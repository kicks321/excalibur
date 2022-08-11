import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Landing = (props: Props) => {
  return (
    <div>
      Landing
      <Link to="/auth">Auth</Link>
    </div>
  );
};

export default Landing;
