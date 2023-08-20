/**
 * @description 그룹 검색 링크 생성 후 이동
 * @param group
 * @param keyword
 */
import GroupList from "../data/group.json";

type Props = {
  group: string;
  keyword: string;
};
export default function makeGroupLink({ group, keyword }: Props) {
  const selected = GroupList.filter((elem) => elem.name === group);

  // 1. 문자 변환
  // '#승철이_이거먹고_볼빵빵했꾸마' -> "%23승철이_이거먹고_볼빵빵했꾸마 OR "
  const transTag = (origin: string) => {
    return `%23${origin}%20OR%20`;
  };
  const tagList = selected[0].tag.map((elem) => {
    return transTag(elem.slice(1));
  });

  let tagString = "";
  tagList.forEach((elem) => (tagString += `${elem}`));

  const lastIndex = tagString.length;
  tagString = tagString.slice(0, lastIndex - 8);

  // 2. 링크 생성
  const searchString =
    "https://twitter.com/search?q=" +
    keyword +
    tagString +
    "&src=typed_query&f=top";
  window.open(searchString);
}
