// ================================================================
// 컴포넌트
// ================================================================
export interface Card extends OrderableObject {
  title: string;
  description: string;
  createdAt: Date;

  listId: string;
}

export interface List extends OrderableObject {
  title: string;

  boardId: string;
  cards: Card[];
}

export interface Board extends OrderableObject {
  title: string;
  backgroundColor: string;

  lists: List[];
}

export interface BoardsState {
  boards: Board[];
  selectedBoardId: string;
}

// ================================================================
// 공용 객체
// ================================================================
export interface IdObject {
  id: string;
}

export interface OrderableObject extends IdObject {
  displayOrder: number;
}
