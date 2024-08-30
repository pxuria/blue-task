import { createPortal } from "react-dom";

const Modal = ({ onClose, children }) => {
  document.querySelector("body").style.overflow = "hidden";

  const onBackdropHandler = () => {
    document.querySelector("body").style.overflow = "auto";
    onClose();
  };

  return (
    <>
      {createPortal(
        <>
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] w-full h-screen z-10" onClick={onBackdropHandler} />
          <div className="bg-white fixed top-[5vh] left-[50%] shadow-[0_0_6.3px_0_rgba(0,0,0,0.2)] w-[60%] -translate-x-1/2 z-20 rounded-xl overflow-hidden">
            {children}
          </div>
        </>,
        document.querySelector("#modal")
      )}
    </>
  );
};

export default Modal;
