import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BANNER_LIST } from '../../../data/banner';

const Banner = () => {
  const bannerSettings = {
    spaceBetween: 30,
    modules: [Autoplay, Pagination, Navigation],
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    infinite: true,
  };
  return (
    <BannerContainer>
      <Swiper {...bannerSettings}>
        {BANNER_LIST.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Link to={banner.link} target="_blank">
              <img className="banner" src={banner.image} alt={banner.name} />
            </Link>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <Link
            to="https://youtube.com/@leejaehyun_ing?si=eELbbF09cnmp7ve0"
            target="_blank"
          >
            <img className="banner" src="/assets/banner-hz.jpeg" alt="배너" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner" src="/assets/banner-bx.png" alt="배너" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner" src="/assets/banner-do0.png" alt="배너" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner" src="/assets/banner-ksy.png" alt="배너" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner" src="/assets/banner-jang-1.jpeg" alt="배너" />
        </SwiperSlide> */}
      </Swiper>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  .banner {
    width: 350px;
    height: 85px;
    border-radius: 10px;
  }
`;
