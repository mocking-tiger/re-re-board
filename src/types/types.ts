// ================================================================
// 컴포넌트
// ================================================================
export interface Card {
  id: string;

  title: string;
  description: string;
  displayOrder: number;
  createdAt: Date;

  listId: string;
}

export interface List {
  id: string;

  title: string;
  displayOrder: number;

  boardId: string;
  cards: Card[];
}

export interface Board {
  id: string;

  title: string;
  displayOrder: number;

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
