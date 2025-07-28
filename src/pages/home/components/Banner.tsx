import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { styled } from "styled-components"
import { Link } from "react-router-dom"

const Banner = () => {
  const bannerSettings = {
    spaceBetween: 30,
    modules: [Autoplay, Pagination, Navigation],
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  }
  return (
    <BannerContainer>
      <Swiper {...bannerSettings}>
        <SwiperSlide>
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
        </SwiperSlide>
      </Swiper>
    </BannerContainer>
  )
}

export default Banner

const BannerContainer = styled.div`
  .banner {
    width: 340px;
    height: 85px;
    border-radius: 10px;
  }
`
