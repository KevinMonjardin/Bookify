import imagen2 from "../img/op.jpg";
import imagen3 from "../img/db.jpg";
import imagen4 from "../img/naruto.jpg";
import Flickity from "react-flickity-component";

const flickityOptions = {
  initialIndex: 2,
  wrapAround: true,
};

export const Carousel = () => {
  return (
    <Flickity
      className={"carousel"} // default '' elementType={"div"} // default 'div'
      options={flickityOptions } // takes flickity options {}
      disableImagesLoaded={false} // default false reloadOnUpdate // default
      false
      static // default false
    >
      <img src={imagen2} alt="Libro 1" />
      <img src={imagen3} alt="Libro 2" />
      <img src={imagen4} alt="Libro 3" />
      <img src={imagen2} alt="Libro 4" />
      <img src={imagen3} alt="Libro 5" />
      <img src={imagen4} alt="Libro 6" />
      <img src={imagen2} alt="Libro 7" />
      <img src={imagen3} alt="Libro 8" />
      <img src={imagen4} alt="Libro 9" />
    </Flickity>
  );
};
