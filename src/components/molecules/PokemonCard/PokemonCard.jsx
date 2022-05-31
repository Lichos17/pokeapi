import React from "react";
import PropTypes from "prop-types";

import { Button, Image, Text } from "../../atoms";
import { CardContainer, Flex, Grid } from "../../UI-utils";
import { useNavigate } from "react-router-dom";

export const PokemonCard = ({ src, pokemonName, abilities, types, id }) => {
  let navigate = useNavigate();

  const handleNavigationId = () => {
    navigate(`/dashboard/${id}`);
  };

  const handleNavigationImage = () => {
    navigate(`/dashboard/image/${id}`);
  };

  return (
    <CardContainer as="article">
      <Image
        onClick={handleNavigationImage}
        src={src}
        alt={`${pokemonName} photo`}
        extendedStyles="cursor:pointer;"
      />
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
          onClick={handleNavigationId}
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
  id: PropTypes.number.isRequired,
};
