import { useState } from "react";
import "../../assets/style/wordCard.scss";
import { IWord } from "../../interfaces/IWord";
import { STATUS } from "./statusCard";

const WordCard = ({ word }: { word: IWord }) => {
  const [flip, setFlip] = useState(false);

  function flipCard() {
    setFlip(!flip);
  }

  return (
    <div className="word-container" onClick={flipCard}>
      <div
        className={`word word-${STATUS(word.attributes.status)} word-flipper${
          flip ? " word-flipper-rotate" : ""
        }`}
      >
        <div className="word-flipper__front">
          <h3>{word.attributes.text}</h3>
        </div>
        <div className="word-flipper__back">
          <h3>{word.attributes.russian}</h3>
        </div>
      </div>
    </div>
  );
};

export default WordCard;
