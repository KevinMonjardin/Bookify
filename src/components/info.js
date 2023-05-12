import React, { useState } from "react";
import {Modal} from "./modal";

export const Info = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <button onClick={openModal} className="info-btn">Book 1</button>

      {showModal && (
        <Modal onClose={closeModal}>
          <form>
            <h2>Bookmark</h2>
            <label htmlFor="book-name">Título: </label> <label htmlFor="book-name">One piece Vol.1</label>
            <br />
            <label htmlFor="Autor">Autor: </label> <label htmlFor="book-name">Eiichiro Oda</label>
            <br />
            <label htmlFor="Editorial">Editorial: </label> <label htmlFor="book-name">Jump Comic</label>
            <br />
            <label htmlFor="Año">Año: </label> <label htmlFor="book-name">1943</label>
            <br />
            <label htmlFor="Género">Género: </label> <label htmlFor="book-name">Manga</label>
            <br />
            <label htmlFor="Páginas">Páginas: </label> <label htmlFor="book-name">208</label>
            <br />
            <label htmlFor="Idioma">Idioma: </label> <label htmlFor="book-name">Japones</label>
            <br />
            <label htmlFor="Sinopsis">Descricion: </label> <label htmlFor="book-name">Lorem ipsum dolor sit amet</label>
            <br />
            <label htmlFor="link">Link: </label> <a htmlFor="book-name" target = "blank" href = "http://surl.li/gzkuz">http://surl.li/gzkuz</a>
            <div className="boton-form">
            <button type="close" onClick={closeModal}>Salir</button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};


