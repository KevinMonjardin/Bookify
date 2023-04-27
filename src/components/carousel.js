import React, { useRef } from "react";
import "../carou.css";
import imagen0 from "../img/arrow.png";
import imagen1 from "../img/op.jpg";
import imagen2 from "../img/db.jpg";
import imagen3 from "../img/naruto.jpg";

export const LCarousel = () => {
  const carouselRef = useRef(null);
  const handleNext = () => {
    const carouselWidth = carouselRef.current.offsetWidth;
    carouselRef.current.scrollLeft += carouselWidth;
  };

  const handlePrev = () => {
    const carouselWidth = carouselRef.current.offsetWidth;
    carouselRef.current.scrollLeft -= carouselWidth;
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
          <div className="product-card">
            <div className="product-image">
              <img src={imagen1} className="product-thumb" alt="book cover" />
              <button className="card-btn">Bookmark</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">Book 1</h2>
              <p className="product-short-description">Description of book 1</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={imagen2} className="product-thumb" alt="book cover" />
              <button className="card-btn">Bookmark</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">Book 2</h2>
              <p className="product-short-description">Description of book 2</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={imagen3} className="product-thumb" alt="book cover" />
              <button className="card-btn">Bookmark</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">Book 2</h2>
              <p className="product-short-description">Description of book 2</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={imagen1} className="product-thumb" alt="book cover" />
              <button className="card-btn">Bookmark</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">Book 2</h2>
              <p className="product-short-description">Description of book 2</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={imagen2} className="product-thumb" alt="book cover" />
              <button className="card-btn">Bookmark</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">Book 2</h2>
              <p className="product-short-description">Description of book 2</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={imagen3} className="product-thumb" alt="book cover" />
              <button className="card-btn">Bookmark</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">Book 2</h2>
              <p className="product-short-description">Description of book 2</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
