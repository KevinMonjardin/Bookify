import React, { useState } from "react";
import {Modal} from "./modal";

export const Add = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Añadir Libro</button>

      {showModal && (
        <Modal onClose={closeModal}>
          <form>
            <h2>Añadir Libro</h2>
            <label htmlFor="book-name">Título</label>
            <input type="text" id="book-name" name="book-name" placeholder="Título" required /> <br />
            <label htmlFor="Autor">Autor</label>
            <input type="text" id="autor" name="autor" placeholder="Autor" required /> <br />
            <div className="boton-form">
            <button type="submit">Añadir</button>
            <button type="close" onClick={closeModal}>Cancelar</button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};


