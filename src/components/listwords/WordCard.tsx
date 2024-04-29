import { useState } from "react";
import { FiFeather } from "react-icons/fi";
import "../../assets/style/wordCard.scss";
import { IWord } from "../../interfaces/IWord";
import ImageAssotiationModal from "./ImageAssotiationModal";
import { STATUS } from "./statusCard";

const WordCard = ({ word }: { word: IWord }) => {
  const [flip, setFlip] = useState(false);

  function flipCard() {
    let visibleTimeout;
    if (!flip) {
      visibleTimeout = setTimeout(() => setFlip(false), 2000);
    } else {
      clearTimeout(visibleTimeout);
    }
    setFlip(!flip);
  }

  return (
    <div className="word-container">
      <div
        className={`word word-${STATUS(word.attributes.status)} word-flipper${
          flip ? " word-flipper-rotate" : ""
        }`}
        onClick={flipCard}
      >
        <div className="word-flipper__front">
          <ImageAssotiationModal></ImageAssotiationModal>

          <FiFeather className="word-flipper__front-image word"></FiFeather>
          <h3>{word.attributes.title}</h3>
          {/* <p>{word.attributes.assotiation.data}</p> */}
        </div>
        <div className="word-flipper__back">
          <h3>{word.attributes.translate}</h3>
        </div>
      </div>
    </div>
  );
};

export default WordCard;
