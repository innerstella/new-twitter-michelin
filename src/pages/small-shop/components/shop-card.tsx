import { Link } from '@chakra-ui/react';
import { Box, Card, Flex, Text } from '@radix-ui/themes';
import { Shop } from '../../../model/shop';
import X_LOGO from '../x-logo.svg';

interface ShopCardProps {
  shop: Shop;
  isOffline: boolean;
}

export const ShopCard = ({ shop, isOffline }: ShopCardProps) => {
  return (
    <Card size="2" style={{ width: '340px', overflow: 'hidden' }}>
      <Flex
        direction="column"
        gap="3"
        justify="start"
        align="start"
        style={{ minWidth: 0 }}
      >
        <Text as="p" size="3" weight="bold">
          {shop.name}
        </Text>
        <Text as="p" size="1">
          {shop.description}
        </Text>
        <Box style={{ width: '100%' }}>
          <Flex justify="between" align="end" gap="2">
            {isOffline ? (
              <Flex direction="column" gap="2">
                {shop.address && (
                  <Text as="p" size="1" wrap="wrap">
                    📍 {shop.address}
                  </Text>
                )}
                {shop.phone && (
                  <Text as="p" size="1" wrap="wrap">
                    ☎️ {shop.phone}
                  </Text>
                )}
              </Flex>
            ) : (
              <Link
                href={shop.site_url}
                target="_blank"
                size="1"
                style={{ minWidth: 0, maxWidth: '100%', overflow: 'hidden' }}
              >
                <Text
                  as="p"
                  size="1"
                  wrap="nowrap"
                  style={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  🔗 {shop.site_url}
                </Text>
              </Link>
            )}
            <Link href={shop.twitter_url} target="_blank">
              <img
                src={X_LOGO}
                alt="x"
                style={{ width: '16px', height: '16px', color: 'black' }}
              />
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};
