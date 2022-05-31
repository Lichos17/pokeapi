import styled from "styled-components";
import PropTypes from "prop-types";

export const Input = styled.input`
  padding: 15px 10px;
  border-radius: 0.5rem;
  border: 1px solid
    ${(props) => (props.valid ? props.theme.pallete.primary : "red")};
  width: 100%;
  color: #97a4b5;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.pallete.secondary};

  ${(props) => props.extendedStyles}

  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #97a4b5;
    font-size: 1.2rem;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: #97a4b5;
    font-size: 1.2rem;
  }

  ::-ms-input-placeholder {
    color: #97a4b5;
    font-size: 1.2rem;
  }

  ${(props) => props.extendedStyles && props.extendedStyles}
`;

Input.propTypes = {
  extendedStyles: PropTypes.string,
  valid: PropTypes.bool,
};
