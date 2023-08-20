import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { styled } from "styled-components";

const Banner = () => {
  const bannerSettings = {
    spaceBetween: 30,
    modules: [Autoplay, Pagination, Navigation],
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };
  return (
    <BannerContainer>
      <Swiper {...bannerSettings}>
        <SwiperSlide>
          <img className="banner" src="/assets/banner-kia.png" alt="배너1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner" src="/assets/banner-euilee.png" alt="배너2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner" src="/assets/banner-do0.png" alt="배너2" />
        </SwiperSlide>
      </Swiper>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  .banner {
    height: 85px;
    border-radius: 10px;
    width: 340px;
  }
`;
