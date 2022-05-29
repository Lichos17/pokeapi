import styled from "styled-components";
import PropTypes from "prop-types";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-gap: 1.5rem;
  max-width: 100%;
  width: 100%;

  ${(props) => props.extendedStyles && props.extendedStyles}
`;

Grid.propTypes = {
  extendedStyles: PropTypes.resetWarningCache,
};
