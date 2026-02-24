// ================================================================
// 타입, 인터페이스
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
  cards: Card[];
  displayOrder: number;

  boardId: string;
}

export interface Board {
  id: string;
  title: string;
  lists: List[];
}

export interface IdObject {
  id: string;
}

export interface OrderableObject extends IdObject {
  displayOrder: number;
}
