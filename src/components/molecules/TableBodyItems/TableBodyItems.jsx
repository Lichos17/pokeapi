import React from "react";

import { Button, Image, TableItem, Text } from "../../atoms";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const TableBodyItems = ({
  src,
  alt,
  pokemonName,
  abilities,
  types,
  id,
}) => {
  let navigate = useNavigate();

  const handleNavigationId = () => {
    navigate(`/dashboard/${id}`);
  };

  return (
    <tr style={{}}>
      <TableItem>{id}</TableItem>
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
          onClick={handleNavigationId}
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
  id: PropTypes.number.isRequired,
};
