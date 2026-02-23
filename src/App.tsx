import './App.css';
import Board from './components/Board/Board';
import { clearBoard } from './utils/storage';

const App = () => {
  return (
    <div className="App">
      <Board />
      <button className="reset-button" onClick={clearBoard}>
        보드 초기화
      </button>
    </div>
  );
};

export default App;
