import React, { useState, useEffect } from "react";
import "./ImageBanner.scss";

export function ImageBanner(props) {
  const pictures = props.pictures;

  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };

  const arePicturesAvailable = () => {
    return pictures && pictures.length > 0;
  };

  const getCarouselOrDefaultImage = () => {
    if (!arePicturesAvailable()) {
      return (
        <img src="../../public/aboutBackground.jpg" className="show" alt="" />
      );
    }
    return pictures.map((pic, i) => (
      <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
    ));
  };

  const hideButtonIfOnePicture = () => {
    if (pictures.length === 1) {
      const buttons = document.getElementsByClassName("bouton__carrousel");
      const counter = document.getElementsByClassName("slide-counter");
      console.log(counter);
      counter[0].classList.add("hide__bouton");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("hide__bouton");
      }
    }
  };

  useEffect(() => {
    hideButtonIfOnePicture();
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div className="image__banner">
      <div className="image__container">{getCarouselOrDefaultImage()}</div>
      {arePicturesAvailable() && (
        <>
          <button
            className="btn btn-previous bouton__carrousel"
            onClick={moveToPrevious}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="slide-counter">
            {currentPicture + 1} / {pictures.length}
          </span>
          <button
            className="btn btn-next bouton__carrousel"
            onClick={moveToNext}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  );
}
