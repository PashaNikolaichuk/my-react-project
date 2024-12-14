import { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open modal</button>
      {isOpen && (
        <Modal title="Modal" onClose={closeModal}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, porro
          quod ipsum laboriosam architecto quam in, labore deserunt natus
          sapiente ducimus modi aut magni dicta. Necessitatibus placeat velit
          laudantium maiores.
        </Modal>
      )}
    </div>
  );
};
export default App;
