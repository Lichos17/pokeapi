import React from "react";
import { Text } from "../../atoms";
import { Flex } from "../../UI-utils/Flex";
import PropTypes from "prop-types";

export const LoginTemplate = ({ title, children }) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      extendedStyles="height: 100vh; width: 100vw; max-width: 40rem; margin: 0 auto;"
    >
      <Text
        extendedStyles="margin-bottom: 4rem;"
        as="h1"
        size="lg"
        weight="bold"
      >
        {title}
      </Text>
      {children}
    </Flex>
  );
};

LoginTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
