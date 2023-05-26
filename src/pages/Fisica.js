import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/categories.css";
import { Sidebar } from "../components/sidebar";
import { Modal } from "../components/modal";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const openModal = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchData(0);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          `${searchQuery} subject:física`
        )}&startIndex=${page * 10}&maxResults=10`
      );

      const allBooks = response.data.items;

      setBooks(allBooks.slice(0, 100));
      setTotalPages(Math.ceil(allBooks.length / 10));
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Sidebar />
      <div className="main">
        <h2 className="lib-des">Libros de Física</h2>
        <input
          type="text"
          placeholder="Buscar libros..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="catalog">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt="book cover"
                className="thumbnail"
                onClick={() => openModal(book)}
              />
            </div>
          ))}
        </div>
        {selectedBook !== null && (
          <Modal onClose={closeModal}>
            <form>
              <h2>Bookmark</h2>
              <label className="infotitle" htmlFor="title">
                Título:{" "}
              </label>
              <label htmlFor="book-name">
                {selectedBook?.volumeInfo?.title}
              </label>
              <br />
              <label className="infotitle" htmlFor="Autor">
                Autor:{" "}
              </label>
              <label htmlFor="book-name">
                {selectedBook?.volumeInfo?.authors?.[0]}
              </label>
              <br />
              <label className="infotitle" htmlFor="Editorial">
                Editorial:{" "}
              </label>
              <label htmlFor="book-name">
                {selectedBook?.volumeInfo?.publisher}
              </label>
              <br />
              <label className="infotitle" htmlFor="Año">
                Año:{" "}
              </label>
              <label htmlFor="book-name">
                {selectedBook?.volumeInfo?.publishedDate}
              </label>
              <br />
              <label className="infotitle" htmlFor="Género">
                Género:{" "}
              </label>
              <label htmlFor="book-name">
                {selectedBook?.volumeInfo?.categories?.[0]}
              </label>
              <br />
              <label className="infotitle" htmlFor="Páginas">
                Páginas:{" "}
              </label>
              <label htmlFor="book-name">
                {selectedBook?.volumeInfo?.pageCount}
              </label>
              <br />
              <label className="infotitle" htmlFor="Idioma">
                Idioma:{" "}
              </label>
              <label htmlFor="book-name">
                {selectedBook?.volumeInfo?.language}
              </label>
              <br />
              <label className="infotitle" htmlFor="Sinopsis">
                Descripción:{" "}
              </label>
              <label htmlFor="book-name">
                {selectedBook?.volumeInfo?.description &&
                selectedBook?.volumeInfo?.description.length > 300
                  ? `${selectedBook?.volumeInfo?.description.substring(
                      0,
                      300
                    )}...`
                  : selectedBook?.volumeInfo?.description}
              </label>
              <br />
              <label className="infotitle" htmlFor="link">
                Link:{" "}
              </label>
              <a
                htmlFor="book-name"
                target="_blank"
                rel="noreferrer"
                href={selectedBook?.volumeInfo?.previewLink}
              >
                {selectedBook?.volumeInfo?.previewLink}
              </a>
              <div className="boton-form">
                <button type="button" onClick={closeModal}>
                  Salir
                </button>
              </div>
            </form>
          </Modal>
        )}
        <div className="pagination-buttons">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              disabled={currentPage === index}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;
