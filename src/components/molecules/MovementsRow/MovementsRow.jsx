import React from "react";
import styledComponents from "styled-components";
import { Text } from "../../atoms";
import { Flex } from "../../UI-utils";

export const MovementRowContainer = styledComponents.div`
  margin: 1rem 0;
  padding: 1rem 0;


  &:not(:last-of-type){
    border-bottom: 1px solid ${(props) => props.theme.pallete.tertiary};
  }
`;

export const MovementsRow = () => {
  return (
    <MovementRowContainer>
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
    </MovementRowContainer>
  );
};
