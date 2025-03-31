import { styled } from "styled-components"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { SERVICE_TYPE, ServiceType } from "../../../types/service"

interface HeaderData {
  logoSrc: string
  title: string
}

const HEADER_LIST: Record<ServiceType, HeaderData> = {
  michelin: {
    logoSrc: "/assets/icon/restaurant.svg",
    title: "트위터 맛집 검색기",
  },
  hotpot: {
    logoSrc: "/assets/hotpot.png",
    title: "하이디라오 소스 백과사전",
  },
} as const

const Header = () => {
  const location = useLocation()
  const [service, setService] = useState<ServiceType>(SERVICE_TYPE.MICHELIN)

  useEffect(() => {
    setService(
      location.pathname === "/" ? SERVICE_TYPE.MICHELIN : SERVICE_TYPE.HOTPOT
    )
  }, [location.pathname])

  return (
    <LogoContainer>
      <div className="left">
        <img src={HEADER_LIST[service].logoSrc} alt="로고" />
        <span className="title">&nbsp; {HEADER_LIST[service].title}</span>
      </div>
      {service === SERVICE_TYPE.MICHELIN && (
        <div
          style={{ width: "25px" }}
          onClick={() =>
            window.open(
              "https://innerstella.notion.site/affa459f47294cb599b9ccb8e8a9d9ef?pvs=4"
            )
          }
        >
          <img src="/assets/icon/question.svg" alt="정보" />
        </div>
      )}
    </LogoContainer>
  )
}

export default Header

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;

  .left {
    display: flex;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
    }
    .title {
      color: #4a5568;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`
