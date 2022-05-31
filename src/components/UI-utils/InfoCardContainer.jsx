import styled from "styled-components";
import PropTypes from "prop-types";

export const InfoCardContainer = styled.article`
  border: 1px solid #47525e;
  padding: 1.5rem;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.card.bg};
  border: 1px solid ${(props) => props.theme.card.borders};

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
