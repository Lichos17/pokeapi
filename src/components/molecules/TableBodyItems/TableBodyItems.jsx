import React from "react";
import styled from "styled-components";
import { Button, Image, TableItem, Text } from "../../atoms";
import { Flex } from "../../UI-utils";
import PropTypes from "prop-types";

export const TableBodyItems = ({ src, alt, pokemonName, abilities, types }) => {
  return (
    <tr style={{}}>
      <TableItem>1</TableItem>
      <TableItem>{pokemonName}</TableItem>
      <TableItem>
        <Image
          extendedStyles="width: 4rem; height: 6rem;"
          src={src}
          alt={alt}
        />
      </TableItem>
      <TableItem>
        {types &&
          types.map((type) => (
            <Text key={type?.type?.name} as="p" size="sm">
              {type?.type?.name}
            </Text>
          ))}
      </TableItem>
      <TableItem>
        {abilities &&
          abilities.map((ability) => (
            <Text key={ability?.ability?.name} as="p" size="sm">
              {ability?.ability?.name}
            </Text>
          ))}
      </TableItem>
      <TableItem extendedStyles="text-align: center;">
        <Button
          extendedStyles="margin: 0 auto;"
          buttonType="primaryButton"
          size="sm"
        >
          Shiny
        </Button>
      </TableItem>
    </tr>
  );
};

TableBodyItems.defaultProps = {
  src: "",
  alt: "",
  pokemonName: "",
};

TableBodyItems.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  pokemonName: PropTypes.string.isRequired,
  abilities: PropTypes.arrayOf(PropTypes.object),
  types: PropTypes.arrayOf(PropTypes.object),
};
