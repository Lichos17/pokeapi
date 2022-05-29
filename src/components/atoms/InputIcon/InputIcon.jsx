import styled from "styled-components";
import PropTypes from "prop-types";

export const InputIcon = styled.i`
  z-index: 2;

  & + input {
    padding-left: 3rem;
  }
  ${(props) => props.extendedStyles && props.extendedStyles}
`;

InputIcon.propTypes = {
  extendedStyles: PropTypes.string,
};
