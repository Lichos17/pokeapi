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

const weights = {
  bold: "bold",
  regular: "regular",
};

export const Button = styled.a`
  background-color: ${(props) => props.theme[props.buttonType].background};
  border: ${(props) => props.theme[props.buttonType].border};
  border-radius: ${(props) => {
    if (props.buttonType === "navButton") {
      return "0";
    } else {
      return "0.2rem";
    }
  }};
  color: ${(props) => props.theme[props.buttonType].text};
  display: flex;
  font-weight: 200;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  align-items: center;

  min-width: max-content;

  ${(props) => {
    if (props.size === "xs")
      return "width:1rem; height: 2rem; font-size: 0.8rem; padding: 0 0.5rem; @media(max-width: 480px){width: 2rem; height: 3rem;}";
    if (props.size === "sm")
      return "width:3rem;height: 2rem; font-size: 0.7rem; padding: 0 1rem; @media(max-width: 480px){width: 10rem; height: 3rem;} ";
    if (props.size === "md")
      return "width: 10rem;height: 2.5rem; font-size: 0.6rem; padding: 0 1rem; @media(max-width: 480px){width: 12rem; height: 3rem;}";
    if (props.size === "lg")
      return "width: 14rem;height: 3rem; font-size: 0.8rem; padding: 0 1rem; @media(max-width: 480px){width: 14rem; height: 3rem;}";
    if (props.size === "xl")
      return "width: 18rem;height: 3rem; font-size: 1.2rem; padding: 0 0.5rem; @media(max-width: 480px){width: 15rem; height: 3rem;}";
  }}
  ${(props) => props.disabled && "opacity: 0.6; cursor: default;"}
  font-weight: ${(props) => (props.weight === "bold" ? "700" : "400")};

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
  weight: PropTypes.oneOf(Object.keys(weights)),
  disabled: PropTypes.bool,
};
