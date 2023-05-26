import React, { useRef, useEffect, useState } from "react";
import "../carou.css";
import imagen0 from "../img/arrow.png";
import { Modal } from "./modal";
import "../styles/modal.css";

export const LCarousel = () => {
  const carouselRef = useRef(null);
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyA2YAbIw0ILtlYwy-haYlhlmmMsNh4jTAs"
        );
        const data = await response.json();
        setBooks(data.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, []);

  const handleNext = () => {
    const carouselWidth = carouselRef.current.offsetWidth;
    carouselRef.current.scrollLeft += carouselWidth;
  };

  const handlePrev = () => {
    const carouselWidth = carouselRef.current.offsetWidth;
    carouselRef.current.scrollLeft -= carouselWidth;
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="product">
        <button className="pre-btn" onClick={handlePrev}>
          <img src={imagen0} alt="flecha" />
        </button>
        <button className="nxt-btn" onClick={handleNext}>
          <img src={imagen0} alt="flecha" />
        </button>

        <div className="product-container" ref={carouselRef}>
          {books.map((book) => (
            <div className="product-card" key={book.id}>
              <div className="product-image">
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  className="product-thumb"
                  alt="book cover"
                />
                <button className="card-btn" onClick={openModal}>
                  Información
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {showModal && (
        <Modal onClose={closeModal}>
          <form>
            <h2>Bookmark</h2>
            <label className="infotitle" htmlFor="title">
              Título:{" "}
            </label>{" "}
            <label htmlFor="book-name">{books[0].volumeInfo.title}</label>
            <br />
            <label className="infotitle" htmlFor="Autor">
              Autor:{" "}
            </label>{" "}
            <label htmlFor="book-name">{books[0].volumeInfo.authors[0]}</label>
            <br />
            <label className="infotitle" htmlFor="Editorial">
              Editorial:{" "}
            </label>{" "}
            <label htmlFor="book-name">{books[0].volumeInfo.publisher}</label>
            <br />
            <label className="infotitle" htmlFor="Año">
              Año:{" "}
            </label>{" "}
            <label htmlFor="book-name">
              {books[0].volumeInfo.publishedDate}
            </label>
            <br />
            <label className="infotitle" htmlFor="Género">
              Género:{" "}
            </label>{" "}
            <label htmlFor="book-name">
              {books[0].volumeInfo.categories[0]}
            </label>
            <br />
            <label className="infotitle" htmlFor="Páginas">
              Páginas:{" "}
            </label>{" "}
            <label htmlFor="book-name">{books[0].volumeInfo.pageCount}</label>
            <br />
            <label className="infotitle" htmlFor="Idioma">
              Idioma:{" "}
            </label>{" "}
            <label htmlFor="book-name">{books[0].volumeInfo.language}</label>
            <br />
            <label className="infotitle" htmlFor="Sinopsis">
              Descripción:{" "}
            </label>{" "}
            <label htmlFor="book-name">
              {books[0].volumeInfo.description &&
              books[0].volumeInfo.description.length > 300
                ? `${books[0].volumeInfo.description.substring(0, 300)}...`
                : books[0].volumeInfo.description}
            </label>
            <br />
            <label className="infotitle" htmlFor="link">
              Link:{" "}
            </label>{" "}
            <a
              htmlFor="book-name"
              target="_blank"
              rel="noreferrer"
              href={books[0].volumeInfo.previewLink}
            >
              {books[0].volumeInfo.previewLink}
            </a>
            <div className="boton-form">
              <button type="button" onClick={closeModal}>
                Salir
              </button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};
