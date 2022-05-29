import styled from "styled-components";
import PropTypes from "prop-types";

const types = {
  primaryButton: "primary",
  secondaryButton: "secondary",
  navButton: "navigation",
};

const sizes = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
};

export const Button = styled.a`
  background-color: ${(props) => props.theme[props.buttonType].background};
  color: ${(props) => props.theme[props.buttonType].text};
  border: ${(props) => props.theme[props.buttonType].border};
  border-radius: ${(props) => {
    if (props.buttonType === "navButton") {
      return "0";
    } else {
      return "0.2rem";
    }
  }};
  font-weight: 200;
  cursor: pointer;
  text-align: center;

  min-width: max-content;

  ${(props) => {
    if (props.size === "xs") return "padding: .5rem 0.8rem; font-size: 0.8rem;";
    if (props.size === "sm") return "padding: 0.6rem 1rem; font-size: 0.6rem;";
    if (props.size === "md") return "padding: 0.7rem 2rem; font-size: 0.7rem;";
    if (props.size === "lg") return "padding: 0.7rem 3rem; font-size: 0.8rem;";
    if (props.size === "xl") return "padding: 0.8rem 2rem; font-size: 1.2rem;";
  }}

  ${(props) => props.extendedStyles && props.extendedStyles};
`;

Button.defaultProps = {
  buttonType: "primaryButton",
  size: "md",
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  buttonType: PropTypes.oneOf(Object.keys(types)),
  extendedStyles: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)).isRequired,
};
