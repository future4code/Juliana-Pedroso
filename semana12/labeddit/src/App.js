import React from "react";
import "./App.css";
import theme from "./constants/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Routers from "./routes/Routers";

function App() {
  document.title = "LabEddit";

  return (
    <ThemeProvider theme={theme}>
      <Routers />
    </ThemeProvider>
  );
}

export default App;
