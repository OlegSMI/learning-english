import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useEnglishWordsAPi } from "../api/englishWordsApi";
import "../assets/style/listWords.scss";
import "../assets/style/textfield.scss";
import { IWord, StatusWord } from "../interfaces/IWord";
import WordCard from "./listwords/WordCard";
const ListWords = () => {
  const [word, setWord] = useState("");
  const [rusWord, setRusWord] = useState("");
  const [words, setWords] = useState<Array<IWord>>([] as IWord[]);

  const { getWords, setNewWord } = useEnglishWordsAPi();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWords();
      console.log(data);
      setWords(data as IWord[]);
    };
    fetchData();
  }, []);

  const addNewWord = () => {
    const payload = {
      wordId: null,
      text: word,
      status: "know" as StatusWord,
      russian: rusWord,
      assotiative: null,
    };
    setNewWord(payload);
    setWords([
      ...words,
      {
        id: words[words.length - 1].id + 1,
        attributes: payload,
      },
    ]);
  };

  return (
    <div>
      <TextField
        className="input_text"
        id="outlined-multiline-flexible"
        label="Слово для ввода"
        multiline
        value={word}
        maxRows={4}
        color="info"
        onChange={(e) => setWord(e.target.value)}
      />
      <TextField
        className="input_text"
        id="outlined-multiline-flexible"
        label="Слово для перевода"
        multiline
        value={rusWord}
        maxRows={4}
        onChange={(e) => setRusWord(e.target.value)}
      />
      <Button onClick={addNewWord}>Добавить слово</Button>
      <div className="words__wrapper">
        {words.map((word) => (
          <WordCard key={word.id} word={word}></WordCard>
        ))}
      </div>
    </div>
  );
};

export default ListWords;
