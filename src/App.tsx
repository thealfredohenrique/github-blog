import { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";
import Router from "./Router";
import GlobalStyle from "./styles/global";
import defaultTheme from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <Router />
      </HashRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
