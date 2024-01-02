import { styled } from "styled-components";

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
            <p className="text">
              훠궈 소스
              <br />
              백과사전
            </p>
            <img className="img" src="/assets/hotpot.png" alt="hotpot" />
          </div>
          <div
            className="box luck"
            onClick={() => window.open("https://happybaseball-diary.web.app/ ")}
          >
            <p className="text">직관 일기</p>
            <img className="img" src="/assets/ball.png" alt="lottery" />
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Content;

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
    height: 150px;
    overflow-x: scroll;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .box {
    width: 135px;
    height: 135px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 15px;
  }
  .hotpot {
    background-color: #e15a24;
    .text {
      color: #fff;
      font-size: 18px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      margin: 0;
    }
    .img {
      width: 84px;
      margin-left: 35px;
      margin-top: -5px;
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
`;
