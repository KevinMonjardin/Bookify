import React, { useState } from "react";
import {Modal} from "./modal";

export const Delete = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Eliminar Libro</button>

      {showModal && (
        <Modal onClose={closeModal}>
          <form>
          <h2>Eliminar Libro</h2>
          <label htmlFor="book-name">Título</label>
          <input type="text" id="book-name" name="book-name" placeholder="Título" required/> <br />
          <button type="submit">Eliminar Libro</button>
          <button type="close" onClick={closeModal}>Cancelar</button>
          </form>
        </Modal>
      )}
    </div>
  );
}


