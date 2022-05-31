import React from "react";
import PropTypes from "prop-types";

import { Text } from "../../atoms";
import { Flex, MovementsRowContainer } from "../../UI-utils";

export const MovementsRow = ({ power, precisition, type, index }) => {
  return (
    <MovementsRowContainer>
      <Text extendedStyles="margin-bottom: 1rem;" size="sm" weight="bold">
        Movimiento {index + 1}
      </Text>
      <Flex>
        <div>
          <Text size="sm" weight="bold" as="h4" type="secondary">
            Poder
          </Text>
          <Text size="sm" weight="bold" as="h4" type="secondary">
            {power || "-"}
          </Text>
        </div>
        <div>
          <Text size="sm" weight="bold" as="h4" type="secondary">
            Precision
          </Text>
          <Text size="sm" weight="bold" as="h4" type="secondary">
            {precisition || "-"}
          </Text>
        </div>
        <div>
          <Text size="sm" weight="bold" as="h4" type="secondary">
            Type
          </Text>
          <Text size="sm" weight="bold" as="h4" type="secondary">
            {type || "-"}
          </Text>
        </div>
      </Flex>
    </MovementsRowContainer>
  );
};

MovementsRow.propTypes = {
  power: PropTypes.string.isRequired,
  precisition: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
