import React from "react";
import styledComponents from "styled-components";
import PropTypes from "prop-types";

import { Text } from "../../atoms";
import { Flex } from "../../UI-utils";

export const InfoCardContainer = styledComponents.article`
  border: 1px solid #47525E;
  padding: 1.5rem;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.card.bg};
  border: 1px solid ${(props) => props.theme.card.borders};
  

  &:not(:last-child){
    margin-bottom: 1rem;
  }
`;

export const InfoCard = ({ name, types, children }) => {
  return (
    <InfoCardContainer>
      <Flex>
        <Text extendedStyles="flex-grow:1;">{name}</Text>
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
