import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import { Router } from "router/Router";

import { theme } from "theme";

import { AuthProvider } from "contexts/LoginContext";

import { GlobalStyles } from "assets/styles/globalStyles";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <>
            <GlobalStyles />
            <Router />
          </>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
