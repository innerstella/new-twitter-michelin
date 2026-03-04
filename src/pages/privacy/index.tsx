import { Spacer } from '@chakra-ui/react';
import { Text } from '@radix-ui/themes';
import styled from 'styled-components';
import Template from '../../templates';
import Bar from '../group/components/Bar';

const PrivacyPage = () => {
  return (
    <Template>
      <PrivacyContainer>
        <Bar title="개인정보처리방침" />
        <Section>
          <Text size="3" weight="bold">
            1. 개인정보의 처리 목적
          </Text>
          <Spacer height="8px" />
          <Text size="2" as="p">
            트위터 맛집 검색기(이하 "서비스")는 다음의 목적을 위해 개인정보를
            처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지
            않으며, 이용 목적이 변경될 시에는 별도의 동의를 받는 등 필요한
            조치를 이행할 예정입니다.
          </Text>
          <Spacer height="8px" />
          <Text size="2" as="p">
            - 서비스 이용 통계 분석 및 서비스 개선
            <br />- 맞춤형 광고 제공 (Google AdSense)
          </Text>
        </Section>

        <Section>
          <Text size="3" weight="bold">
            2. 수집하는 개인정보 항목 및 수집 방법
          </Text>
          <Spacer height="8px" />
          <Text size="2" as="p">
            본 서비스는 이용자로부터 직접 개인정보를 수집하지 않습니다. 단,
            아래와 같이 자동으로 수집되는 정보가 있습니다.
          </Text>
          <Spacer height="8px" />
          <Text size="2" as="p">
            <strong>자동 수집 항목:</strong>
            <br />
            - IP 주소, 브라우저 유형, 방문 일시, 서비스 이용 기록 (Google
            Analytics)
            <br />- 쿠키(Cookie) 및 유사 기술을 통해 수집되는 광고 관련 정보
            (Google AdSense)
          </Text>
        </Section>

        <Section>
          <Text size="3" weight="bold">
            3. 개인정보의 처리 및 보유 기간
          </Text>
          <Spacer height="8px" />
          <Text size="2" as="p">
            서비스는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터
            개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서
            개인정보를 처리·보유합니다.
          </Text>
          <Spacer height="8px" />
          <Text size="2" as="p">
            Google Analytics 데이터는 Google의 데이터 보유 정책에 따라
            처리됩니다.
          </Text>
        </Section>

        <Section>
          <Text size="3" weight="bold">
            4. 제3자 제공
          </Text>
          <Spacer height="8px" />
          <Text size="2" as="p">
            본 서비스는 다음과 같은 제3자에게 이용자 정보를 제공하거나 공유할 수
            있습니다.
          </Text>
          <Spacer height="8px" />
          <Text size="2" as="p">
            <strong>Google LLC (Google Analytics, Google AdSense)</strong>
            <br />
            - 제공 목적: 서비스 이용 통계 분석, 맞춤형 광고 제공
            <br />
            - 제공 항목: 서비스 이용 기록, 쿠키 정보
            <br />
            - 보유 기간: Google의 개인정보 처리방침에 따름
            <br />- Google 개인정보 처리방침:{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              https://policies.google.com/privacy
            </a>
          </Text>
        </Section>

        <Section>
          <Text size="3" weight="bold">
            5. 쿠키(Cookie) 사용
          </Text>
          <Spacer height="8px" />
          <Text size="2" as="p">
            본 서비스는 Google Analytics 및 Google AdSense를 통해 쿠키를
            사용합니다. 쿠키는 웹사이트를 운영하는 데 이용되는 서버가 이용자의
            컴퓨터 브라우저에게 보내는 소량의 정보입니다. 이용자는 브라우저
            설정을 통해 쿠키 사용을 거부할 수 있으나, 일부 서비스 이용이 제한될
            수 있습니다.
          </Text>
        </Section>

        <Section>
          <Text size="3" weight="bold">
            6. 이용자의 권리
          </Text>
          <Spacer height="8px" />
          <Text size="2" as="p">
            이용자는 언제든지 자신의 개인정보에 대한 열람, 정정, 삭제, 처리정지
            요청을 할 수 있습니다. 광고 맞춤설정을 원하지 않는 경우 Google 광고
            설정에서 조정하실 수 있습니다.
          </Text>
        </Section>
        <Spacer height="40px" />
      </PrivacyContainer>
    </Template>
  );
};

export default PrivacyPage;

const PrivacyContainer = styled.div`
  width: 100%;
  min-height: 100dvh;
  padding: 0 25px;
  background-color: #fafafa;
  font-family: 'SUIT', sans-serif;
  box-sizing: border-box;

  a {
    color: #e5534b;
    text-decoration: underline;
  }
`;

const Section = styled.div`
  margin-bottom: 24px;
`;
