import React, { useState } from "react";
import { IconContext } from "react-icons";
import { IoImageOutline } from "react-icons/io5";
import ModalWindow from "../shared/ModalWindow";

const ImageAssotiationModal = ({ image }: { image: unknown }) => {
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
        <img
          src={`${
            import.meta.env.VITE_API_URL +
            image.data[0].attributes.formats.thumbnail.url
          }`}
        ></img>
      </ModalWindow>
    </>
  );
};

export default ImageAssotiationModal;
