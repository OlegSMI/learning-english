import { Modal } from "@mui/material";
import { ReactNode } from "react";
import { FiX } from "react-icons/fi";

const ModalWindow = ({
  children,
  isOpen,
  onClose,
}: {
  children: ReactNode;
  isOpen: boolean;
  onClose: (event: React.MouseEvent<Element>) => void;
}) => {
  return (
    <div
      onClick={(event: React.MouseEvent<Element>) => event.stopPropagation()}
    >
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal__wrapper">
          <div
            onClick={(event: React.MouseEvent<Element>) => onClose(event)}
            style={{ cursor: "pointer" }}
          >
            <FiX />
          </div>
          <div>{children}</div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalWindow;

// import { ReactNode } from "react";
// import { FiX } from "react-icons/fi";
// import { Transition } from "react-transition-group";
// import "../../assets/style/modalWindow.scss";

// const ModalWindow = ({
//   children,
//   isOpen,
//   onClose,
// }: {
//   children: ReactNode;
//   isOpen: boolean;
//   onClose: () => void;
// }) => {
//   const onWrapperClick = (event: unknown) => {
//     console.log(event);
//     // if (event.target.classList.contains("modal-wrapper")) onClose();
//   };

//   return (
//     <>
//       <Transition in={isOpen} timeout={350} unmountOnExit={true}>
//         {(state) => (
//           <div className={`modal modal--${state}`}>
//             <div className="modal__wrapper" onClick={onWrapperClick}>
//               <div className="modal__content">
//                 <FiX onClick={onClose} />
//                 <div className="modal__content">{children}</div>;
//               </div>
//             </div>
//           </div>
//         )}
//       </Transition>
//     </>
//   );
// };

// export default ModalWindow;
