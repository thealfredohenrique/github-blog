import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import Issue from "./pages/Issue";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/issue/:code" element={<Issue />} />
      </Route>
    </Routes>
  );
}

export default Router;
