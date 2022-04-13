import "./App.css";
import Heading from "./components/Heading";
import ContactGrid from "./components/ContactGrid";
import ContactTable from "./components/ContactTable";

// import { createTheme, ThemeProvider } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material";
// import { createTheme, ThemeProvider } from "@material-ui/core/styles";
// import { Typography } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Heading />
        {/* <ContactGrid /> */}
        <ContactTable />
      </div>
    </ThemeProvider>
  );
}

export default App;
