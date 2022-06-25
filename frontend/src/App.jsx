import React, { useState, useEffect } from 'react';
import Dating from './Dating';

function App() {
  const [componentIdx, setComponentIdx] = useState(0)

  const selectComponent = (idx) => {
    switch(idx){
      case 0:
        return <Dating/>
    }
  }

  return (
    <div className="App">
      {selectComponent(componentIdx)}
    </div>
  );
}

export default App;
