export interface Card {
    id: string;
    title: string;
    description: string;
    order: number;
    createdAt: Date;
}

export interface List {
    id: string;
    title: string;
    cards: Card[];
    order: number;
}

export interface Board {
    id: string;
    title: string;
    lists: List[];
}