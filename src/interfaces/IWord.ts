export type StatusWord = "know" | "partial know" | "not know";

export interface IWord {
  id: number;
  attributes: {
    wordId: string;
    title: string;
    status: StatusWord;
    translate: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    assotiation?: unknown;
    favourite: boolean | null;
    notice: string | null;
    tags?: unknown;
    group?: unknown;
  };
}

export interface IAttributes {}
