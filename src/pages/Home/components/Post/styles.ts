import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const PostWrapper = styled(NavLink)`
  background-color: ${(props) => props.theme.basePost};
  border: 2px solid transparent;
  border-radius: 10px;
  height: 16.25rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
  text-decoration: none;

  &:hover {
    border: 2px solid ${(props) => props.theme.baseLabel};
  }

  header {
    display: flex;
    justify-content: space;
    column-gap: 1rem;

    h1 {
      flex: 1;
      color: ${(props) => props.theme.baseTitle};
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 160%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    span {
      color: ${(props) => props.theme.baseSpan};
      font-size: 0.875rem;
      line-height: 160%;
    }
  }

  p {
    color: ${(props) => props.theme.baseText};
    line-height: 160%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;
