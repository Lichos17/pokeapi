import styledComponents from "styled-components";
import PropTypes from "prop-types";

export const CarouselButton = styledComponents.i`
  background-color: transparent;
  border: none;
  font-size: 2.5rem; 
  cursor: pointer;

  ${(props) => props.extendedStyles && props.extendedStyles}
`;

CarouselButton.propTypes = {
  extendedStyles: PropTypes.string,
};
