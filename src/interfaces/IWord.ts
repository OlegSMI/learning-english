import { IMedia } from "./IMedia";
export type StatusWord = "know" | "partial know" | "not know";

export interface IWord {
  id: number;
  attributes: IAttributes;
}

export interface IAttributes {
  wordId: string;
  title: string;
  status: StatusWord;
  translate: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  assotiation?: IMedia | undefined;
  favourite?: boolean | null;
  notice?: string | null;
  tags?: unknown;
  group?: unknown;
}
