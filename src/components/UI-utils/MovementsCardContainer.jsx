import styled from "styled-components";

export const MovementsCardContainer = styled.article`
  border: 1px solid #47525e;
  padding: 1.5rem;
  width: calc(30% - 1rem);
  margin-left: 1rem;

  background-color: ${(props) => props.theme.card.bg};
  border: 1px solid ${(props) => props.theme.card.borders};

  @media (max-width: 480px) {
    width: 100%;
    margin-left: 0rem;
  }
`;
