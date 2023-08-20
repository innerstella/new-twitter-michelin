import { styled } from "styled-components";
import GroupList from "../../../data/group.json";

type Props = {
  group: string;
};
const TagList = ({ group }: Props) => {
  const selectedGroup = GroupList.filter((elem) => elem.name === group);
  return (
    <TagContainer>
      <p className="title">포함된 해시태그</p>
      <div className="tag">
        {selectedGroup[0].tag.map((elem) => {
          return <span>{elem} &nbsp;</span>;
        })}
      </div>
    </TagContainer>
  );
};
export default TagList;

const TagContainer = styled.div`
  font-family: "SUIT", sans-serif;
  .title {
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 20px;
  }
  .tag {
    line-height: 25px;
  }
`;
