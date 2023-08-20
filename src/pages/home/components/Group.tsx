import { styled } from "styled-components";

import groupData from "../../../data/group.json";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Group = () => {
  const navigate = useNavigate();
  const [groupList, setGroupList] = useState<string[]>([]);

  // 그룹 이름 출력
  useEffect(() => {
    const tagList = groupData.map((elem) => elem.name);
    setGroupList([...tagList]);
  }, []);

  // 랜덤으로 섞기
  const shuffle = (arr: string[]) => {
    let shuffled = arr.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const clickShuffle = () => {
    const origin = groupList.slice();
    const shuffled = shuffle(origin);
    setGroupList([...shuffled]);
  };

  // 그룹 페이지로 이동
  const clickGroup = (elem: string) => {
    navigate("/group", { state: { group: elem } });
  };

  return (
    <GroupContainer>
      <div className="flex-row">
        <p className="title">추천 먹시태그</p>
        <div style={{ width: "15px" }} onClick={() => clickShuffle()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 19 19"
            fill="none"
          >
            <path
              d="M2 2V6.6875H2.54518M2.54518 6.6875C3.65777 3.93891 6.35246 2 9.5 2C13.3246 2 16.4806 4.86283 16.942 8.5625M2.54518 6.6875H6.6875M17 17V12.3125H16.4548M16.4548 12.3125C15.3422 15.0611 12.6476 17 9.5 17C5.67536 17 2.51937 14.1372 2.05802 10.4375M16.4548 12.3125H12.3125"
              stroke="#4A5568"
              stroke-width="2.44748"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex-col-container">
        <div className="flex-col">
          {groupList.map((elem) => (
            <div className="box text" onClick={() => clickGroup(elem)}>
              # {elem}
            </div>
          ))}
        </div>
      </div>
    </GroupContainer>
  );
};

export default Group;

const GroupContainer = styled.div`
  font-family: "SUIT", sans-serif;
  /* width: 390px; */
  .flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
  .title {
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 5px;
  }
  .flex-col-container {
    max-width: 100%;
    overflow-x: scroll;
  }
  .flex-col {
    display: flex;
    gap: 10px;
  }
  .box {
    height: 40px;
    display: inline-block;
    justify-content: center;
    align-items: center;
    max-width: 100%; // 부모 컨테이너의 최대 넓이를 기준으로 설정
    white-space: nowrap; //텍스트가 한 줄에 나타나도록 함
    border-radius: 20px;
    border: 1px solid #000;
    background: #fff;
    padding: 8px 22px;
    .text {
      margin: 0;
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;
