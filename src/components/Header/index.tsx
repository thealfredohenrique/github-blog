import leftLines from "../../assets/left-lines.svg";
import rightLines from "../../assets/right-lines.svg";
import terminal from "../../assets/terminal.svg";
import { HeaderWrapper, Logo } from "./styles";

function Header() {
  return (
    <HeaderWrapper>
      <img src={leftLines} alt="" />

      <Logo>
        <img src={terminal} alt="" />
        <h1>GITHUB BLOG</h1>
      </Logo>

      <img src={rightLines} alt="" />
    </HeaderWrapper>
  );
}

export default Header;
