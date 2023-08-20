import { useState } from "react";
import { styled } from "styled-components";

import { useToast } from "@chakra-ui/react";

import makeTotalLink from "../util/make-total-link";
import makeGroupLink from "../util/make-group-link";

type Props = {
  page: "home" | "group";
  group?: string;
};

const Search = ({ page, group }: Props) => {
  const [keyword, setKeyword] = useState("");

  const toast = useToast();

  const onClickSearch = () => {
    if (keyword === "") {
      // alert("장소 또는 메뉴를 입력하세요!"); // 토스트 알림으로 교체
      toast({
        title: "장소 또는 메뉴를 입력하세요!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      if (page === "home") {
        makeTotalLink(keyword);
      }
      if (page === "group" && group) {
        makeGroupLink({ group: group, keyword: keyword });
      }
    }
  };

  return (
    <SearchContainer>
      {page === "home" && <p className="text-home">무엇을 먹을까요?</p>}
      {page === "group" && <p className="text-group">#{group}</p>}

      <div className="search-box">
        <input
          className="input-box"
          placeholder="장소 또는 메뉴를 입력하세요!"
          onChange={(e) => setKeyword(e?.target.value)}
        />
        <div onClick={onClickSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
          >
            <path
              d="M27 27L18.6667 18.6667M21.4444 11.7222C21.4444 17.0917 17.0917 21.4444 11.7222 21.4444C6.35279 21.4444 2 17.0917 2 11.7222C2 6.35279 6.35279 2 11.7222 2C17.0917 2 21.4444 6.35279 21.4444 11.7222Z"
              stroke="#4A5568"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="info-container">
        <span className="material-symbols-outlined info-text">info</span>
        <span className="info-text">
          &nbsp;검색 버튼을 누르면 트위터로 이동합니다!
        </span>
      </div>
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  .text-home {
    color: #000;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin-bottom: 40px;
  }
  .text-group {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin-bottom: 35px;
  }
  .search-box {
    border-bottom: 3px solid #4a5568;
    width: 100%;
    display: flex;
    padding-bottom: 5px;
    .input-box {
      border: none;
      width: 100%;
      font-size: 18px;
      outline: none;
      background-color: transparent;
    }
  }
  .info-container {
    margin-top: 8px;
    display: flex;
    align-items: center;
    .info-text {
      color: gray;
      font-size: 14px;
    }
  }
`;
