import { Spacer } from '@chakra-ui/react';
import { Badge, Card, Flex, Text } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Template from '../../templates';
import Bar from '../group/components/Bar';

const AboutPage = () => {
  return (
    <Template>
      <AboutContainer>
        <Bar title="서비스 소개" />

        <Section>
          <Text size="5" weight="bold" as="p">
            트위터 맛집 검색기
          </Text>
          <Spacer height="8px" />
          <Text size="3" as="p" style={{ color: '#4A5568' }}>
            광고 없는 진짜 맛집을 트위터(X)에서 찾아드립니다.
          </Text>
        </Section>

        <Section>
          <Text size="3" weight="bold" as="p">
            서비스 소개
          </Text>
          <Spacer height="10px" />
          <Text size="2" as="p" style={{ lineHeight: '1.8' }}>
            트위터(X)는 솔직한 맛집 후기와 추천이 활발하게 공유되는
            플랫폼입니다. 하지만 원하는 맛집을 검색하려면 트위터 내 검색 기능의
            한계로 인해 불편함이 많았습니다. 트위터 맛집 검색기는 트위터에서
            언급된 맛집 정보를 쉽게 검색하고 탐색할 수 있도록 만들어진
            서비스입니다.
          </Text>
        </Section>

        <Section>
          <Text size="3" weight="bold" as="p">
            주요 기능
          </Text>
          <Spacer height="10px" />
          <Flex direction="column" gap="3">
            <Card>
              <Flex direction="column" gap="1">
                <Text size="2" weight="bold">
                  🔍 맛집 검색
                </Text>
                <Text size="2" style={{ color: '#4A5568' }}>
                  가게 이름, 지역, 음식 종류로 트위터에서 언급된 맛집을 검색할
                  수 있습니다.
                </Text>
              </Flex>
            </Card>
            <Card>
              <Flex direction="column" gap="1">
                <Text size="2" weight="bold">
                  👀 그룹별 보기
                </Text>
                <Text size="2" style={{ color: '#4A5568' }}>
                  음식 종류, 지역 등 다양한 카테고리별로 묶인 맛집 그룹을 탐색할
                  수 있습니다.
                </Text>
              </Flex>
            </Card>
            <Card>
              <Flex direction="column" gap="1">
                <Text size="2" weight="bold">
                  ✨ 추천 해시태그
                </Text>
                <Text size="2" style={{ color: '#4A5568' }}>
                  트위터에서 맛집 탐색에 유용한 해시태그를 랜덤으로
                  추천해드립니다.
                </Text>
              </Flex>
            </Card>
            <Card>
              <Flex direction="column" gap="1">
                <Text size="2" weight="bold">
                  🔔 소상공인 가게 찾기
                </Text>
                <Text size="2" style={{ color: '#4A5568' }}>
                  소상공인 가게를 지도에서 확인할 수 있습니다.
                </Text>
              </Flex>
            </Card>
            <Card>
              <Flex direction="column" gap="1">
                <Text size="2" weight="bold">
                  🍲 훠궈 소스 백과사전
                </Text>
                <Text size="2" style={{ color: '#4A5568' }}>
                  하이디라오에서 즐길 수 있는 훠궈 소스의 특징과 키워드를 정리한
                  백과사전입니다.
                </Text>
              </Flex>
            </Card>
          </Flex>
        </Section>

        <Section>
          <Text size="3" weight="bold" as="p">
            기술 정보
          </Text>
          <Spacer height="10px" />
          <Flex gap="2" wrap="wrap">
            <Badge color="blue">React</Badge>
            <Badge color="blue">TypeScript</Badge>
            <Badge color="orange">Firebase</Badge>
            <Badge color="green">Supabase</Badge>
            <Badge color="purple">Kakao Maps</Badge>
          </Flex>
        </Section>

        <Section>
          <Text size="3" weight="bold" as="p">
            문의 및 제보
          </Text>
          <Spacer height="8px" />
          <Text size="2" as="p" style={{ lineHeight: '1.8' }}>
            새로운 맛집 정보 제보, 오류 신고, 소상공인 가게 홍보 등의 문의는
            아래 링크를 통해 주세요.
          </Text>
          <Spacer height="8px" />
          <a
            href="https://innerstella.notion.site/affa459f47294cb599b9ccb8e8a9d9ef"
            target="_blank"
            rel="noreferrer"
          >
            <Text
              size="2"
              style={{ color: '#e5534b', textDecoration: 'underline' }}
            >
              문의 페이지 바로가기 →
            </Text>
          </a>
        </Section>

        <Section>
          <Link to="/privacy">
            <Text size="2" style={{ color: '#718096' }}>
              개인정보처리방침
            </Text>
          </Link>
        </Section>

        <Spacer height="40px" />
      </AboutContainer>
    </Template>
  );
};

export default AboutPage;

const AboutContainer = styled.div`
  width: 100%;
  min-height: 100dvh;
  padding: 0 25px;
  background-color: #fafafa;
  font-family: 'SUIT', sans-serif;
  box-sizing: border-box;
`;

const Section = styled.div`
  margin-bottom: 28px;
`;
