import { generateId } from '../utils/helpers';

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

// ================================================================
// 더미데이터
// ================================================================
export const cards1 = [
  {
    id: generateId(),
    title: '봄이 오면 산에 들에 진달래 피네',
    description:
      '진달래 피는곳에 내 마음도 피어 건너마을 젊은 처자 꽃따러 오면은 꽃만 말고 이 마음도 함께 따가주',
    displayOrder: 1,
    createdAt: new Date(),
  },
  {
    id: generateId(),
    title: '오늘밤 그 말만은 말아요',
    description:
      '그냥 서럽고 서러워 난 사연이 많아 추억이 많아 가슴 찢어져요 아직은 안녕 우린 안돼요 넌 그 입을 더 열지마 안녕이라고 내게 말하지마',
    displayOrder: 2,
    createdAt: new Date(),
  },
  {
    id: generateId(),
    title: '밥도 잘 먹지 못해',
    description:
      '혼자 살아서 뭐해 네가 더 잘 알잖아 너 없인 나 안돼잖아 너밖에 몰라서 너없인 밥도 잘 먹지 못하는 난데 차마 죽지도 못해 네가 돌아올까봐 울면서 날 찾을까봐 오늘도 내일도',
    displayOrder: 3,
    createdAt: new Date(),
  },
  {
    id: generateId(),
    title: '별이 빛나는 밤에',
    description: '조용히 창문을 열어 밤하늘을 바라봐요. 별들이 속삭이는 듯 내 마음이 설레어와요.',
    displayOrder: 4,
    createdAt: new Date(),
  },
  {
    id: generateId(),
    title: '햇살 좋은 오후',
    description: '나른한 오후 한가로운 카페에서 햇살 가득 받아 마시며 잠시 쉬어요.',
    displayOrder: 5,
    createdAt: new Date(),
  },
  {
    id: generateId(),
    title: '추억의 여행길',
    description:
      '오래된 사진을 꺼내보다가 그때의 웃음과 그리움을 떠올려 본다. 다시 떠나고 싶어지는 여행길.',
    displayOrder: 6,
    createdAt: new Date(),
  },
];

export const lists = [
  {
    id: generateId(),
    title: '오늘 할 일',
    cards: cards1,
    displayOrder: 1,
  },
];
