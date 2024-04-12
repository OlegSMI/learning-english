import { createContext } from "react";
import { IWord } from "../../interfaces/IWord";

interface IWordContext {
  id: number;
  dispatch: (newWord: IWord) => void;
}

export const WordContext = createContext<IWordContext>({} as IWordContext);
