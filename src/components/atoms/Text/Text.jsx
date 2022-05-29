import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const sizes = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
};

const weights = {
  bold: "bold",
  regular: "regular",
};
const types = {
  primary: "primary",
  secondary: "secondary",
};

export const Text = styled.p`
  font-size: ${(props) => {
    if (props.size === "xs") return "0.7rem";
    if (props.size === "sm") return "1rem";
    if (props.size === "md") return "1.5rem";
    if (props.size === "lg") return "2rem";
  }};
  color: ${(props) =>
    props.type === "primary"
      ? props.theme.text.primary
      : props.theme.text.secondary};

  font-weight: ${(props) => (props.weight === "bold" ? "700" : "regular")};

  ${(props) => props.extendedStyles && props.extendedStyles}
`;

Text.defaultProps = {
  size: "md",
  weight: "regular",
  type: "primary",
};

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  size: PropTypes.oneOf(Object.keys(sizes)).isRequired,
  extendedStyles: PropTypes.string,
  weight: PropTypes.oneOf(Object.keys(weights)),
  type: PropTypes.oneOf(Object.keys(types)),
};
