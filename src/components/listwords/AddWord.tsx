import { Button, FormControl, MenuItem, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useEnglishWordsAPi } from "../../api/englishWordsApi";
import { StatusWord } from "../../interfaces/IWord";
import { WordContext } from "./AddWordContext";

const AddWord = () => {
  const [word, setWord] = useState("");
  const [rusWord, setRusWord] = useState("");

  const { setNewWord } = useEnglishWordsAPi();

  const { id: wordId, dispatch: setWords } = useContext(WordContext);

  const addNewWord = () => {
    const payload = {
      wordId: null,
      text: word,
      status: "know" as StatusWord,
      russian: rusWord,
      assotiative: null,
    };
    setNewWord(payload);
    setWords({
      id: wordId + 1,
      attributes: payload,
    });
  };

  const currencies = [
    {
      value: "know",
      label: "Знаю",
    },
    {
      value: "partial know",
      label: "В основном знаю",
    },
    {
      value: "not know",
      label: "Не знаю",
    },
  ];

  return (
    <FormControl className="word-form">
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
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="know"
        helperText="Please select your currency"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" size="small" onClick={addNewWord}>
        Добавить слово
      </Button>
    </FormControl>
  );
};

export default AddWord;
