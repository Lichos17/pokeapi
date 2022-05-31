import React from "react";

import { Text } from "../../atoms";
import { Flex, MovementsRowContainer } from "../../UI-utils";

export const MovementsRow = () => {
  return (
    <MovementsRowContainer>
      <Text extendedStyles="margin-bottom: 1rem;" size="sm" weight="bold">
        Movimiento 1
      </Text>
      <Flex>
        <div>
          <Text size="sm" weight="bold" as="h4" type="secondary">
            Poder
          </Text>
          <Text size="sm" weight="bold" as="h4" type="secondary">
            100
          </Text>
        </div>
        <div>
          <Text size="sm" weight="bold" as="h4" type="secondary">
            Poder
          </Text>
          <Text size="sm" weight="bold" as="h4" type="secondary">
            100
          </Text>
        </div>
        <div>
          <Text size="sm" weight="bold" as="h4" type="secondary">
            Poder
          </Text>
          <Text size="sm" weight="bold" as="h4" type="secondary">
            100
          </Text>
        </div>
      </Flex>
    </MovementsRowContainer>
  );
};
