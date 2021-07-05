import React from "react";
import "./carousel.styles.css";
let cake =
  "data:image/jpeg;base64,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";

const Carousel = () => (
  <div
    id="carouselExampleControls"
    class="carousel slide  "
    data-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item   carousel active">
        <img class="d-block w-100" src={cake} alt="First slide" />
      </div>
      <div class="carousel-item  carousel">
        <img class="d-block w-100" src={cake} alt="Second slide" />
      </div>
      <div class="carousel-item  carousel">
        <img class="d-block w-100" src={cake} alt="Third slide" />
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
);

export default Carousel;