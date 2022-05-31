import React from "react";
import PropTypes from "prop-types";

import { Text } from "../../atoms";
import { Flex, InfoCardContainer } from "../../UI-utils";

export const InfoCard = ({ name, types, children }) => {
  return (
    <InfoCardContainer>
      <Flex>
        <Text extendedStyles="flex-grow:1; margin-bottom: 1rem;">{name}</Text>
        {types &&
          types.map((type) => (
            <Text
              extendedStyles="margin-left: 1rem;"
              key={type.type.name}
              as="p"
              size="sm"
              weight="bold"
            >
              {type.type.name}
            </Text>
          ))}
      </Flex>
      {children}
    </InfoCardContainer>
  );
};

InfoCard.propTypes = {
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.object),

  children: PropTypes.any,
};
