import { Badge, Flex, ScrollArea } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import groupData from '../../data/group.json';
import { MainContainer } from '../../styles/main';
import Template from '../../templates';
import Bar from '../group/components/Bar';

const GroupListPage = () => {
  const navigate = useNavigate();
  const [groupList, setGroupList] = useState<string[]>([]);
  // 그룹 이름 출력
  useEffect(() => {
    const tagList = groupData.map((elem) => elem.name);
    setGroupList([...tagList]);
  }, []);

  // 그룹 페이지로 이동
  const clickGroup = (groupName: string) => {
    navigate(`/group/${groupName}`, { state: { group: groupName } });
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;

    const groupList = groupData
      .filter((elem) => elem.name.includes(search))
      .map((elem) => elem.name);
    setGroupList(groupList);
  };

  return (
    <Template>
      <MainContainer>
        <Bar title="👀 그룹별로 보기" />
        <SearchBox>
          <input
            type="text"
            placeholder="그룹 이름을 입력하세요"
            onChange={onChangeSearch}
          />
          <div>
            <img src="/assets/icon/search.svg" alt="검색" />
          </div>
        </SearchBox>
        <ScrollArea style={{ height: 'calc(100dvh - 150px)' }}>
          <Flex direction="row" gap="3" wrap="wrap">
            {groupList.map((elem) => (
              <Badge
                variant="soft"
                color="gray"
                size="3"
                onClick={() => clickGroup(elem)}
              >
                # {elem}
              </Badge>
            ))}
          </Flex>
        </ScrollArea>
      </MainContainer>
    </Template>
  );
};

export default GroupListPage;

const SearchBox = styled.div`
  border-bottom: 3px solid #4a5568;
  width: 100%;
  display: flex;
  padding-bottom: 5px;
  margin-bottom: 20px;
  justify-content: space-between;

  input {
    border: none;
    width: 100%;
    font-size: 18px;
    outline: none;
    background-color: transparent;
    &:focus {
      border: none;
      outline: none;
      box-shadow: none;
    }
  }
`;
