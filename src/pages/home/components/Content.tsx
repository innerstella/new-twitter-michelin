import { styled } from "styled-components"

const Content = () => {
  return (
    <ContentContainer>
      <p className="title">이런 건 어때요?</p>
      <div className="margin20"></div>
      <div className="flex-row-container">
        <div className="flex-row">
          <div
            className="box hotpot"
            onClick={() => window.open("https://hotpot-8c321.web.app")}
          >
            <p className="text">하이디라오 소스 백과사전</p>
            <img className="img" src="/assets/hotpot.png" alt="hotpot" />
          </div>
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
  }
  .hotpot {
    background-color: #853c00;
    .text {
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      margin: 0;
    }
    .img {
      width: 30px;
      height: 30px;
    }
  }
  .luck {
    background-color: #a22a2a;
    .text {
      color: #fff;
      font-size: 18px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      margin: 0;
    }
    .img {
      width: 70px;
      margin-left: 35px;
      margin-top: 15px;
    }
  }
  .coming-soon {
    background-color: #b8b8b8;
    .text {
      color: #fff;
      font-size: 18px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      margin: 0;
    }
    .img {
      margin-left: 55px;
      margin-top: 35px;
    }
  }
`
