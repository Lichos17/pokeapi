import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid ${(props) => props.theme.card.borders};
  border-radius: 2px;
  padding: 0.8rem;
  width: 100%;
  background-color: ${(props) => props.theme.card.bg};

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;
