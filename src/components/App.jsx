import React from 'react';
import House from './House';

function App() {
  return(
    <div>
      {/* <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: 'Roboto Mono', monospace;
        }
      `}</style> */}
      <h1>I work! </h1>
      <House />

    </div>
  );
}

export default App;
