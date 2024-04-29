import React, { useState } from "react";
import { IconContext } from "react-icons";
import { IoImageOutline } from "react-icons/io5";
import ModalWindow from "../shared/ModalWindow";

const ImageAssotiationModal = () => {
  const [open, setOpen] = useState(false);

  function stopPropagationModal(e: React.MouseEvent<Element>, isOpen: boolean) {
    e.stopPropagation();
    setOpen(isOpen);
  }

  function openHandler(e: React.MouseEvent<Element>) {
    stopPropagationModal(e, true);
  }

  function closeHadler(e: React.MouseEvent<Element>) {
    stopPropagationModal(e, false);
  }

  return (
    <>
      <IconContext.Provider value={{ className: "image" }}>
        <IoImageOutline
          className="word-flipper__front-image"
          onClick={(event: React.MouseEvent<Element>) => openHandler(event)}
        ></IoImageOutline>
      </IconContext.Provider>
      <ModalWindow
        isOpen={open}
        onClose={(event: React.MouseEvent<Element>) => closeHadler(event)}
      >
        sdsddsd
      </ModalWindow>
    </>
  );
};

export default ImageAssotiationModal;
