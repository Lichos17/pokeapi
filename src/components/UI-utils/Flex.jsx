import styled from "styled-components";
import PropTypes from "prop-types";

export const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};

  ${(props) => props.flexDirection && `flex-direction: ${props.flexDirection}`};
  ${(props) => props.flexGrow && `flex-grow: ${props.flexGrow}`};
  ${(props) => props.extendedStyles && props.extendedStyles};
`;

Flex.defaultProps = {
  justifyContent: "space-between",
  alignItems: "center",
};

Flex.propTypes = {
  justifyContent: PropTypes.string.isRequired,
  alignItems: PropTypes.string.isRequired,
  flexGrow: PropTypes.string,
  flexDirection: PropTypes.string,
  extendedStyles: PropTypes.string,
};
