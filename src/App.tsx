import './App.css';
import { useState } from 'react';
import * as React from 'react'
import Browse from "./Browse";
import Details from "./Details";
import { Exercise } from "./interface";

const App: React.FC = () => {
  const [selected, setSelected] = useState<Exercise>(undefined);

  return (
    <div className="App">
      <h1>Find an Exercise</h1>
        <div className="Content">
          <div className="Browse">
            <Browse onSelect={setSelected} selectedId={selected?.id}/>
          </div>
          <div className="Details">
            <Details selected={selected} />
          </div>
      </div>
    </div>
  );
}

export default App;