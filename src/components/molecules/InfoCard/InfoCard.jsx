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

export const InfoCard = ({ name, type1, type2, description }) => {
  return (
    <InfoCardContainer>
      <Flex>
        <Text extendedStyles="flex-grow:1;">{name}</Text>
        {type1 && (
          <Text as="p" size="sm" extendedStyles="margin-right: 1rem;">
            {type1}
          </Text>
        )}
        {type2 && (
          <Text as="p" size="sm">
            Tipo
          </Text>
        )}
      </Flex>
      <Text extendedStyles="color: #DDE1E7; margin-top: 1rem;" as="p" size="sm">
        {description}
      </Text>
    </InfoCardContainer>
  );
};

InfoCard.propTypes = {
  name: PropTypes.string.isRequired,
  type1: PropTypes.string,
  type2: PropTypes.string,
  description: PropTypes.string.isRequired,
};
