import { Link, Spacer } from '@chakra-ui/react';
import { Badge, Callout, Flex, ScrollArea, Text } from '@radix-ui/themes';
import { MainContainer } from '../../styles/main';
import Template from '../../templates';
import Bar from '../group/components/Bar';
import LOG_DATA from './data';

const LogPage = () => {
  const getColor = (type: string) => {
    switch (type) {
      case 'feature':
        return 'gray';
      case 'fix':
        return 'red';
      default:
        return 'gray';
    }
  };
  return (
    <Template>
      <MainContainer>
        <Bar title="📝 업데이트 로그" />
        <Callout.Root color="yellow" size="1" style={{ width: '100%' }}>
          <Callout.Icon>✉️</Callout.Icon>
          <Callout.Text>
            <Link
              href="https://innerstella.notion.site/affa459f47294cb599b9ccb8e8a9d9ef?source=copy_link"
              target="_blank"
            >
              <Text weight="bold">문의사항</Text>
            </Link>
          </Callout.Text>
        </Callout.Root>
        <Spacer height="20px" />
        <ScrollArea style={{ height: 'calc(100dvh - 150px)' }}>
          <Flex direction="row" gap="3" wrap="wrap">
            {LOG_DATA.map((log) => (
              <Callout.Root
                key={log.date}
                variant="outline"
                color={getColor(log.type)}
                size="2"
                style={{ width: '100%' }}
              >
                <Flex direction="row" gap="2" align="center">
                  <Badge>{log.version}</Badge>
                  <Text size="1"> {log.date}</Text>
                </Flex>
                <Callout.Text size="1">{log.changes}</Callout.Text>
              </Callout.Root>
            ))}
          </Flex>
        </ScrollArea>
      </MainContainer>
    </Template>
  );
};

export default LogPage;
