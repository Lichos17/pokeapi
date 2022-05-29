import React from "react";
import styled from "styled-components";
import { Button, Image, Text } from "../../atoms";
import { Flex } from "../../UI-utils";
import PropTypes from "prop-types";

const CardContainer = styled.div`
  border: 1px solid ${(props) => props.theme.card.borders};
  border-radius: 2px;
  padding: 0.8rem;
  width: 100%;
  background-color: ${(props) => props.theme.card.bg};

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

export const PokemonCard = ({ src, alt, pokemonName, abilities, types }) => {
  return (
    <CardContainer as="article">
      <Image src={src} alt={alt} />
      <Text as="h3" size="md">
        {pokemonName}
      </Text>
      {abilities && (
        <Flex>
          {abilities.map((ability) => (
            <Text key={ability} as="p" size="sm">
              {ability}
            </Text>
          ))}
        </Flex>
      )}
      <Flex justifyContent="space-between" alignItems="center">
        <Flex>
          {types &&
            types.map((type) => (
              <Text key={type} extendedStyles="margin-right: 2rem;" size="sm">
                {type}
              </Text>
            ))}
        </Flex>
        <Button size="sm" buttonType="primaryButton">
          Shiny
        </Button>
      </Flex>
    </CardContainer>
  );
};

PokemonCard.defaultProps = {
  src: "",
  alt: "",
  pokemonName: "",
};

PokemonCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  pokemonName: PropTypes.string.isRequired,
  abilities: PropTypes.arrayOf(PropTypes.string),
  types: PropTypes.arrayOf(PropTypes.string),
};
