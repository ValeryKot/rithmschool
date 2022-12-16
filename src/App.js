import React from 'react';
import Pic from './Pic';

const App = () => {
  return (
    <div>
      <Pic size={300} />
      <Pic round />
    </div>
  );
};

export default App;