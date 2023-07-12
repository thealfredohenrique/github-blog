import { styled } from "styled-components";

export const HomeWrapper = styled.div`
  max-width: 55rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Posts = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 3rem 0;
`;
