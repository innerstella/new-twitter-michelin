import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"

const Bar = () => {
  const navigate = useNavigate()
  return (
    <>
      <BackBar onClick={() => navigate("/")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="22"
          viewBox="0 0 26 22"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.1112 21.5398C11.4975 22.1534 10.5025 22.1534 9.88884 21.5398L0.460257 12.1112C-0.153419 11.4975 -0.153419 10.5025 0.460257 9.88884L9.88884 0.460257C10.5025 -0.153419 11.4975 -0.153419 12.1112 0.460257C12.7248 1.07395 12.7248 2.06891 12.1112 2.68261L5.3652 9.42859H23.5715C24.4394 9.42859 25.1429 10.1321 25.1429 11C25.1429 11.8679 24.4394 12.5715 23.5715 12.5715H5.3652L12.1112 19.3174C12.7248 19.9311 12.7248 20.9261 12.1112 21.5398Z"
            fill="#4A5568"
          />
        </svg>
      </BackBar>
    </>
  )
}

export default Bar

const BackBar = styled.div`
  width: 25px;
  padding-top: 20px;
`
