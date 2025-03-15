import { styled } from "styled-components"

const Header = () => {
  return (
    <LogoContainer>
      <div>
        <span className="material-symbols-outlined title">restaurant</span>
        <span className="title">&nbsp; 트위터 맛집 검색기</span>
      </div>
      <div
        style={{ width: "25px" }}
        onClick={() =>
          window.open(
            "https://innerstella.notion.site/affa459f47294cb599b9ccb8e8a9d9ef?pvs=4"
          )
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 29 29"
          fill="none"
        >
          <path
            d="M9.26064 10.3333C10.0233 8.71501 12.0811 7.55556 14.5001 7.55556C17.5683 7.55556 20.0557 9.42104 20.0557 11.7222C20.0557 13.6658 18.2811 15.2987 15.881 15.7592C15.1276 15.9036 14.5001 16.5107 14.5001 17.2778M14.5 21.4444H14.5139M27 14.5C27 21.4036 21.4036 27 14.5 27C7.59644 27 2 21.4036 2 14.5C2 7.59644 7.59644 2 14.5 2C21.4036 2 27 7.59644 27 14.5Z"
            stroke="#4A5568"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </LogoContainer>
  )
}

export default Header

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  .title {
    color: #4a5568;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`
