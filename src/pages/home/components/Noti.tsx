import { Badge, Callout } from '@radix-ui/themes';

import { Flex } from '@radix-ui/themes';
import { ReactElement } from 'react';

interface NotiData {
  badgeText: string;
  text: ReactElement;
}

const Noti = ({ badgeText, text }: NotiData) => {
  return (
    <Callout.Root size="1" color="gray">
      <Flex direction="row" gap="2" align="center">
        <Callout.Icon>
          <Badge size="1">{badgeText}</Badge>
        </Callout.Icon>
        <Callout.Text size="1">{text}</Callout.Text>
      </Flex>
    </Callout.Root>
  );
};

export default Noti;
