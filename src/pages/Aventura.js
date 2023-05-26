import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/categories.css";
import { Sidebar } from "../components/sidebar";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=matemáticas&startIndex=${
          page * 33
        }&maxResults=33`
      );
      setBooks(response.data.items.slice(0, 100)); // Limitar a un máximo de 100 libros
      setTotalPages(Math.ceil(100 / 10)); // Calcular el número de páginas basado en el límite de 100 libros
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
        <h2 className="lib-des">Libros de Matematicas</h2>
        <div className="catalog">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt="book cover"
                className="thumbnail"
              />
            </div>
          ))}
        </div>
        <div className="pagination-buttons">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              disabled={currentPage === index}
            >
              Página {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;
