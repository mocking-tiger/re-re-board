import './App.css';
import Card from './components/Card/Card';
import List from './components/List/List';
import { useState } from 'react';
import { cards1, lists } from './types/types';
import { formatDate, generateId } from './utils/helpers';

const App = () => {
  const [id, setId] = useState('id');
  const [formattedDate, setFormattedDate] = useState('date');

  return (
    <div className="App">
      <header className="App-header">
        <p>{id}</p>
        <button onClick={() => setId(generateId())}>generate id</button>
        <p>{formattedDate}</p>
        <button onClick={() => setFormattedDate(formatDate(new Date()))}>generate date</button>
      </header>
      <Card card={cards1[0]} />
      <List list={lists[0]} />
    </div>
  );
};

export default App;
