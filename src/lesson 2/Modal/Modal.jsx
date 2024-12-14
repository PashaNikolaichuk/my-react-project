import s from "./Modal.module.css";
const Modal = ({ children, title = "Default modal", onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(e.key);
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    //коли відкривається модалка
    console.log("Modal is open!");
    const intervalId = setInterval(() => {
      //відлік часу
      console.log(new Date().toLocaleTimeString());
    }, 1000);
    const timeoutId = setTimeout(() => {
      //зявляється в консолі через 4 секунди
      console.log("🔥🔥🔥🔥");
    }, 4000);
    // коли закривається модалка
    return () => {
      console.log("Пока пока 😉");
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackDropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose;
    }
  };

  return (
    <div className={s.wrapper} onClick={handleBackDropClick}>
      <div className={s.content}>
        <>
          <h1>{title}</h1>
          <hr />
        </>
        <button onClick={onClose} className={s.closeBtn}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
