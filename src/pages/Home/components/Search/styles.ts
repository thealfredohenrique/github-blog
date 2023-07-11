import { styled } from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;

  label {
    display: flex;
    justify-content: space-between;
  }

  strong {
    color: ${(props) => props.theme.baseSubtitle};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 160%;
  }

  span {
    color: ${(props) => props.theme.baseSpan};
    font-size: 0.875rem;
    line-height: 160%;
  }

  input[type="text"] {
    background-color: ${(props) => props.theme.baseInput};
    color: ${(props) => props.theme.baseText};
    border: 1px solid ${(props) => props.theme.baseBorder};
    border-radius: 6px;
    padding: 0.75rem 1rem;

    &::placeholder {
      color: ${(props) => props.theme.baseLabel};
    }
  }
`;
