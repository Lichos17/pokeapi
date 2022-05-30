import React from "react";
import styled from "styled-components";
import { Button, Image, Text } from "../../atoms";
import { Flex, Grid } from "../../UI-utils";
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

export const PokemonCard = ({ src, pokemonName, abilities, types }) => {
  return (
    <CardContainer as="article">
      <Image src={src} alt={`${pokemonName} photo`} />
      <Text as="h3" size="md">
        {pokemonName}
      </Text>
      {abilities && (
        <Grid
          extendedStyles="grid-template-columns: repeat(3, 1fr);"
          justifyContent="center"
          alignItems="center"
        >
          {abilities.map((ability) => (
            <Text
              extendedStyles="flex-grow: 1; text-align:left;"
              key={ability?.ability?.name}
              as="p"
              size="sm"
            >
              {ability?.ability?.name}
            </Text>
          ))}
        </Grid>
      )}
      <Flex justifyContent="space-between" alignItems="center">
        <Flex>
          {types &&
            types.map((type) => (
              <Text
                key={type?.type?.name}
                extendedStyles="margin-right: 2rem;"
                size="sm"
              >
                {type?.type?.name}
              </Text>
            ))}
        </Flex>
        <Button
          extendedStyles="padding: 0 1rem;"
          size="xs"
          buttonType="primaryButton"
        >
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
  abilities: PropTypes.arrayOf(PropTypes.object),
  types: PropTypes.arrayOf(PropTypes.object),
};
