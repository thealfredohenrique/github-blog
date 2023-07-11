import styled from "styled-components";

export const ProfileWrapper = styled.section`
  width: 54rem;
  height: 13.25rem;
  transform: translateY(-5.5rem);
  margin: 0 auto;
  padding: 2.5rem 2rem;
  background-color: ${(props) => props.theme.baseProfile};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  column-gap: 2rem;
`;

export const Avatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  header {
    display: flex;
    justify-content: space-between;

    strong {
      color: ${(props) => props.theme.baseTitle};
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 130%;
    }

    a {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme.blue};
      font-size: 0.75rem;
      font-weight: 700;
      text-decoration: none;
      text-transform: uppercase;
    }
  }

  p {
    color: ${(props) => props.theme.baseText};
    line-height: 160%;
  }

  footer {
    display: flex;
    align-items: center;
    column-gap: 1.5rem;

    span {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
      color: ${(props) => props.theme.baseSubtitle};

      svg {
        color: ${(props) => props.theme.baseLabel};
      }
    }
  }
`;
