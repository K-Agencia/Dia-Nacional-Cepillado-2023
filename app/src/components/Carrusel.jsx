import { useEffect, useRef } from "react";
import { baseURL } from "../constants/RoutersLinks";
import '../css/Carrusel.css';

const Carrusel = ({ imagenes }) => {

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      injectStyles: [
        ` .swiper-button-next,
          .swiper-button-prev {
            width: 20px;
            height: 20px;
            background-color: rgba(255, 255, 255, 0.9);
            padding: 5px 5px;
            border-radius: 100%;
            border: 0px;
            color: #D2010D;
          }
          .swiper-pagination-bullet{
            width: 10px;
            height: 10px;
            background-color: #D2010D;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <swiper-container
      ref={swiperRef}
      navigation="true"
      pagination="true"
      centeredSlides={true}
      class={"w-100 h-100 rounded-top content-slide"}
      init="false"
    >
      {[...imagenes].map((imagen, index) => (
        <swiper-slide
          key={index}
          class='swiper-zoom-container w-100 h-100 d-flex justify-content-center align-items-center rounded'
          data-swiper-zoom="5"
          minRatio={1}
          maxRatio={3}
        >
          <div className="conatiner-image-slide">
            <img src={`${baseURL}/static/${imagen}`} alt="" className={"img-slide rounded"} />
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default Carrusel;