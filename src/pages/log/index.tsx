import { Badge, Callout, Flex, ScrollArea, Text } from '@radix-ui/themes';
import { MainContainer } from '../../styles/main';
import Template from '../../templates';
import Bar from '../group/components/Bar';
import LOG_DATA from './data';

const LogPage = () => {
  return (
    <Template>
      <MainContainer>
        <Bar title="📝 업데이트 로그" />
        <ScrollArea style={{ height: 'calc(100dvh - 150px)' }}>
          <Flex direction="row" gap="3" wrap="wrap">
            {LOG_DATA.map((log) => (
              <Callout.Root
                key={log.date}
                variant="outline"
                color={log.type === 'feature' ? 'gray' : 'yellow'}
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
