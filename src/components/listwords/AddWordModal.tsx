import { Button } from "@mui/material";
import { useState } from "react";
import "../../assets/style/addWordModal.scss";
import ModalWindow from "../shared/ModalWindow";
import AddWord from "./AddWord";

const AddWordModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Add new word</Button>
      <ModalWindow isOpen={open} onClose={() => setOpen(false)}>
        <AddWord></AddWord>
      </ModalWindow>
    </>
  );
};

export default AddWordModal;
