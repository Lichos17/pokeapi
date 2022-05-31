import styled from "styled-components";

export const MovementsRowContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem 0;
  &:not(:last-of-type) {
    border-bottom: 1px solid ${(props) => props.theme.pallete.tertiary};
  }
`;
