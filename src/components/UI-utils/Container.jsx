import styled from "styled-components";
import PropTypes from "prop-types";

export const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 1rem;
    width: 100%;
    max-width: 100vw;
  }

  ${(props) => props.extendedStyles && props.extendedStyles}
`;

Container.propTypes = {
  extendedStyles: PropTypes.resetWarningCache,
};
