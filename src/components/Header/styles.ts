import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 296px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.baseProfile};
  width: 100%;
  position: relative;

  & > img {
    position: absolute;

    &:first-child {
      left: 0;
      top: 70px;
    }

    &:last-child {
      right: 0;
      top: 30px;
    }
  }
`;

export const Logo = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.25rem;

  h1 {
    color: ${(props) => props.theme.blue};
    font-family: Coda;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 160%;
  }
`;
