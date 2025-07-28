import { styled } from "styled-components"

const Content = () => {
  return (
    <ContentContainer>
      <p className="title">이런 건 어때요?</p>
      <div className="margin20"></div>
      <div className="flex-row-container">
        <div className="flex-row">
          <div
            className="box small-shop"
            onClick={() => window.open("https://smallshop-archive.web.app/")}
          >
            <p>소상공인 찾기 🔔</p>
          </div>
          {/* <Link to="/hotpot"> */}
          <div
            className="box hotpot"
            onClick={() => window.open("https://hotpot-8c321.web.app")}
          >
            <p>훠궈 소스 백과사전</p>
            <img src="/assets/hotpot.png" alt="hotpot" />
          </div>
          {/* </Link> */}
        </div>
      </div>
    </ContentContainer>
  )
}

export default Content

const ContentContainer = styled.div`
  .margin20 {
    height: 20px;
  }
  .title {
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .flex-row-container {
    max-width: 100%;
    overflow-x: scroll;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .box {
    width: auto;
    height: 60px;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    img {
      width: 30px;
      height: 30px;
    }

    p {
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      margin: 0;
      word-break: keep-all;
      white-space: nowrap;
    }
  }

  .hotpot {
    background-color: #853c00;
  }
  .small-shop {
    background-color: #27a383;
  }
`
