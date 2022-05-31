import React from "react";
import PropTypes from "prop-types";
import { Button, Text } from "../../atoms";
import { Flex } from "../../UI-utils";
import { removeEmailWithStorage } from "../../../slices";
import { useDispatch } from "react-redux";

export const Header = ({ title }) => {
  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch(removeEmailWithStorage());
  };

  return (
    <Flex extendedStyles="@media(max-width:480px){flex-wrap: wrap-reverse;}">
      <Text weight="bold" as="h1" size="lg" extendedStyles="margin: 2rem 0;">
        {title}
      </Text>
      <Button onClick={handleSignout} buttonType="navButton" size="sm">
        Sign out
      </Button>
    </Flex>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
