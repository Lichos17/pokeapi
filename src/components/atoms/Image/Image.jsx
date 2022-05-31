import styled from "styled-components";
import PropTypes from "prop-types";

export const Image = styled.img`
  max-width: 100%;
  height: 10rem;
  object-fit: cover;
  width: 100%;

  ${(props) => props.extendedStyles && props.extendedStyles}
`;
Image.propTypes = {
  extendedStyles: PropTypes.string,
};
