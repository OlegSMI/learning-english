import React, { useState } from "react";

import { IconContext } from "react-icons";
import { IoImageOutline } from "react-icons/io5";
import ModalWindow from "../shared/ModalWindow";

const ImageAssotiationModal = () => {
  const [open, setOpen] = useState(false);

  function openModal(e: React.MouseEvent<HTMLElement>) {
    console.log(e);
    e.stopPropagation();
    setOpen(true);
  }

  return (
    <>
      <IconContext.Provider value={{ className: "image" }}>
        <IoImageOutline
          className="word-flipper__front-image"
          onClick={() => openModal(event)}
        ></IoImageOutline>
      </IconContext.Provider>
      <ModalWindow isOpen={open} onClose={() => setOpen(false)}>
        sdsddsd
      </ModalWindow>
    </>
  );
};

export default ImageAssotiationModal;
