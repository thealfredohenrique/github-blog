import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { OutletWrapper } from "./styles";

function DefaultLayout() {
  return (
    <>
      <Header />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </>
  );
}

export default DefaultLayout;
