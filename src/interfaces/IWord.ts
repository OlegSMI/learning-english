export type StatusWord = "know" | "partial know" | "not know";

export interface IWord {
  id: number;
  attributes: {
    wordId: unknown | null;
    text: string;
    status: StatusWord;
    russian: string;
    createdAt?: string;
    updatedAt?: unknown;
    publishedAt?: unknown;
    assotiative: string | null;
  };
}

export interface IAttributes {}
