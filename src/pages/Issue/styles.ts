import { styled } from "styled-components";

export const IssueInfo = styled.section`
  background-color: ${(props) => props.theme.baseProfile};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
  transform: translateY(-50%);

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    a {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: ${(props) => props.theme.blue};
      font-size: 0.75rem;
      font-weight: 700;
      text-decoration: none;
      text-transform: uppercase;
    }
  }

  h1 {
    color: ${(props) => props.theme.baseTitle};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  footer {
    display: inline-flex;
    align-items: center;
    gap: 2rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme.baseSpan};

      svg {
        color: ${(props) => props.theme.baseLabel};
      }
    }
  }
`;
