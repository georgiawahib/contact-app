import "./App.css";
import Heading from "./components/Heading";
import ContactTable from "./components/ContactTable";
import { createTheme, ThemeProvider } from "@mui/material";

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
        <ContactTable />
      </div>
    </ThemeProvider>
  );
}

export default App;
