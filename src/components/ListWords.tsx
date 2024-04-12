import { useEffect, useState } from "react";
import { useEnglishWordsAPi } from "../api/englishWordsApi";
import "../assets/style/listWords.scss";
import "../assets/style/textfield.scss";
import { IWord } from "../interfaces/IWord";
import { WordContext } from "./listwords/AddWordContext";
import AddWordModal from "./listwords/AddWordModal";
import WordCard from "./listwords/WordCard";

const ListWords = () => {
  const [words, setWords] = useState<Array<IWord>>([] as IWord[]);

  const { getWords } = useEnglishWordsAPi();
  const wordId = words[words.length - 1]?.id || 0;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWords();
      setWords(data as IWord[]);
    };
    fetchData();
  }, []);

  const value = {
    id: wordId,
    dispatch: (newWord: IWord) => setWords([...words, newWord]),
  };

  return (
    <div>
      <WordContext.Provider value={value}>
        <AddWordModal></AddWordModal>
      </WordContext.Provider>
      <div className="words__wrapper">
        {words.map((word) => (
          <WordCard key={word.id} word={word}></WordCard>
        ))}
      </div>
    </div>
  );
};

export default ListWords;
