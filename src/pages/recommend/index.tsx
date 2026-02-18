import { Badge, Button, Card, Flex, ScrollArea, Text } from '@radix-ui/themes';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import groupData from '../../data/group.json';
import { MainContainer } from '../../styles/main';
import Template from '../../templates';
import Bar from '../group/components/Bar';

const RecommendPage = () => {
  const navigate = useNavigate();
  const [groupList, setGroupList] = useState<{ name: string; tag: string[] }[]>(
    groupData.slice(0, 10)
  );

  // 랜덤으로 섞기
  const shuffle = (arr: { name: string; tag: string[] }[]) => {
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
    setGroupList(shuffled);
  };

  // 그룹 페이지로 이동
  const clickGroup = (elem: string) => {
    navigate('/group', { state: { group: elem } });
  };

  return (
    <Template>
      <MainContainer>
        <Bar title="✨ 추천 해시태그 보기" />
        <Button
          variant="soft"
          color="yellow"
          size="3"
          onClick={() => clickShuffle()}
        >
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
          <p>새로 고침</p>
        </Button>
        <ScrollArea style={{ height: 'calc(100dvh - 140px)' }}>
          <Flex direction="column" gap="3" wrap="wrap" mt="20px">
            {groupList.slice(0, 10).map((group) => (
              <Card onClick={() => clickGroup(group.name)}>
                <Flex direction="column" gap="3" wrap="wrap">
                  <Text size="3" weight="bold">
                    📍 {group.name}
                  </Text>
                  <Flex direction="row" gap="2" wrap="wrap">
                    {group.tag.map((hashtag) => (
                      <Badge size="2" color="gray">
                        {hashtag}
                      </Badge>
                    ))}
                  </Flex>
                </Flex>
              </Card>
            ))}
          </Flex>
        </ScrollArea>
      </MainContainer>
    </Template>
  );
};

export default RecommendPage;
