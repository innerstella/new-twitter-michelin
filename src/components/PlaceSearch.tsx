import { FormEvent, useState } from "react"
import { styled } from "styled-components"
import { useToast } from "@chakra-ui/react"
import makeTotalLink from "../util/make-total-link"
import makeGroupLink from "../util/make-group-link"
import { Title } from "./Title"
import { SubTitle } from "./SubTitle"

type Props = {
  page: "home" | "group"
  group?: string
}

const PlaceSearch = ({ page, group }: Props) => {
  const [keyword, setKeyword] = useState("")

  const toast = useToast()

  const onClickSearch = (e: FormEvent) => {
    e.preventDefault()

    if (keyword === "") {
      toast({
        title: "장소 또는 메뉴를 입력하세요!",
        status: "error",
        duration: 2000,
        isClosable: true,
      })
    } else {
      if (page === "home") {
        makeTotalLink(keyword)
      }
      if (page === "group" && group) {
        makeGroupLink({ group: group, keyword: keyword })
      }
    }
  }

  return (
    <SearchContainer>
      {page === "home" && <Title>무엇을 먹을까요?</Title>}
      {page === "group" && <SubTitle>#{group}</SubTitle>}
      <form className="search-box" onSubmit={onClickSearch}>
        <input
          className="input-box"
          placeholder="장소 또는 메뉴를 입력하세요"
          onChange={(e) => setKeyword(e?.target.value)}
        />
        <div onClick={onClickSearch}>
          <img src="/assets/icon/search.svg" alt="검색" />
        </div>
      </form>

      <div className="info-container">
        <span className="material-symbols-outlined info-text">info</span>
        <span className="info-text">
          &nbsp;검색 버튼을 누르면 트위터로 이동합니다!
        </span>
      </div>
    </SearchContainer>
  )
}

export default PlaceSearch

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
      color: #4a5568;
      font-size: 14px;
    }
  }
`
