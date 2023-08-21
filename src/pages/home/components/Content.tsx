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
            <p className="text">
              야구 행운
              <br />
              복권
            </p>
            <img className="img" src="/assets/lottery.png" alt="lottery" />
          </div>
          {/* <div className="box coming-soon">
            <p className="text">준비 중</p>
            <div className="img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M26.4615 52.923C41.0758 52.923 52.923 41.0758 52.923 26.4615C52.923 11.8472 41.0758 0 26.4615 0C11.8472 0 0 11.8472 0 26.4615C0 41.0758 11.8472 52.923 26.4615 52.923ZM16.5384 23.1538H9.92306V29.7692H16.5384V23.1538ZM42.9999 23.1538H36.3846V29.7692H42.9999V23.1538ZM23.1538 23.1538H29.7692V29.7692H23.1538V23.1538Z"
                  fill="white"
                />
              </svg>
            </div>
          </div> */}
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
    background-color: #bc201e;
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
    background-color: #87c26b;
    .text {
      color: #fff;
      font-size: 18px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      margin: 0;
    }
    .img {
      width: 110px;
      margin-left: 25px;
      margin-top: -15px;
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
