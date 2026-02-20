import { Badge, Callout } from '@radix-ui/themes';

import { Flex } from '@radix-ui/themes';
import LOG_DATA from '../../log/data';

const Noti = () => {
  const { version, changes } = LOG_DATA[0];

  return (
    <Callout.Root size="1" color="gray">
      <Flex direction="row" gap="2" align="center">
        <Callout.Icon>
          <Badge size="1">{version}</Badge>
        </Callout.Icon>
        <Callout.Text size="1">{changes}</Callout.Text>
      </Flex>
    </Callout.Root>
  );
};

export default Noti;
