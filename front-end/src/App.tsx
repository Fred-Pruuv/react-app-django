import React from 'react';
import './App.css';
import { ItemList }  from './hooks/itemList'

const App: React.FC = () => {
  
  return (
    <div className="App">
      <ItemList/>
    </div>
  );
}

export default App;
