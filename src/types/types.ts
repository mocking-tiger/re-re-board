// ================================================================
// 타입, 인터페이스
// ================================================================
export interface Card {
  id: string;
  title: string;
  description: string;
  displayOrder: number;
  createdAt: Date;
}

export interface List {
  id: string;
  title: string;
  cards: Card[];
  displayOrder: number;
}

export interface Board {
  id: string;
  title: string;
  lists: List[];
}
