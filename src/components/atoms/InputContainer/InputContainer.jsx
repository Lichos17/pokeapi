import styled from "styled-components";
import PropTypes from "prop-types";

export const InputContainer = styled.div`
  position: relative;
  & > i {
    position: absolute;
    left: 10px;
    padding: 0 10px;
    top: 50%;
    fill: black;
    transition: 0.3s;
    transform: translateY(-50%);
    font-size: 1.2rem;
    color: #97a4b5;
  }
  ${(props) => props.extendedStyles && props.extendedStyles}
`;

InputContainer.propTypes = {
  extendedStyles: PropTypes.string,
};
