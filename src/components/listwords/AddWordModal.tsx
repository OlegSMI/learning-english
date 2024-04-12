import { Button, Modal } from "@mui/material";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import "../../assets/style/addWordModal.scss";
import AddWord from "./AddWord";

const AddWordModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Add new word</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal__wrapper">
          {/* <Icon name="activity" /> */}
          <div onClick={() => setOpen(false)}>
            <FiX />
          </div>
          <AddWord></AddWord>
        </div>
      </Modal>
    </div>
  );
};

export default AddWordModal;
