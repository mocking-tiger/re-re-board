import './BoardStats.css';
import { Board as BoardType } from '../../../../types/types';

const BoardStats = ({ board }: { board: BoardType }) => {
  const totalLists = board.lists.length;
  const totalCards = board.lists.reduce((acc, cur) => {
    console.log(acc, '에', cur.cards.length, '를 더함');
    return acc + cur.cards.length;
  }, 0);

  return (
    <div className="board-stats">
      <span>📋 리스트: {totalLists}개</span>
      <span>📝 카드: {totalCards}개</span>
    </div>
  );
};

export default BoardStats;
