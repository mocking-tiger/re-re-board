import { useState } from 'react';
import './App.css';
import { formatDate, generateId } from './utils/helpers';

const App = () => {
  const [id, setId] = useState('id');
  const [formattedDate, setFormattedDate] = useState('date');

  return (
    <div className="App">
      <p>{id}</p>
      <p>{formattedDate}</p>
      <header className="App-header">
        <button onClick={() => setId(generateId())}>generate id</button>
        <button onClick={() => setFormattedDate(formatDate(new Date()))}>generate date</button>
      </header>
    </div>
  );
};

export default App;
