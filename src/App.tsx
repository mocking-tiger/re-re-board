import './App.css';
import Card from './components/Card/Card';
import { useState } from 'react';
import { formatDate, generateId } from './utils/helpers';

const App = () => {
  const [id, setId] = useState('id');
  const [formattedDate, setFormattedDate] = useState('date');

  const cardData = {
    id: '1',
    title: '무거운 몸을 또 일으켜 세워',
    description:
      '난 부숴지는게 무섭지 않아 힘들땐 잠시만 갓길에 세워 졸음쉼터는 찾으면 가까이 있어난 부숴지는게 무섭지 않아 힘들땐 잠시만 갓길에 세워 졸음쉼터는 찾으면 가까이 있어난 부숴지는게 무섭지 않아 힘들땐 잠시만 갓길에 세워 졸음쉼터는 찾으면 가까이 있어난 부숴지는게 무섭지 않아 힘들땐 잠시만 갓길에 세워 졸음쉼터는 찾으면 가까이 있어',
    order: 1,
    createdAt: new Date(),
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>{id}</p>
        <button onClick={() => setId(generateId())}>generate id</button>
        <p>{formattedDate}</p>
        <button onClick={() => setFormattedDate(formatDate(new Date()))}>generate date</button>
      </header>
      <Card card={cardData} />
    </div>
  );
};

export default App;
