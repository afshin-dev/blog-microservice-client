import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Container } from "@mui/material";
import { styled } from "@mui/material";

const Offset = styled("div")((o) => {
  return o.theme.mixins.toolbar;
});

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar></NavBar>
      <Offset></Offset>
      <Container maxWidth="lg">
        <Outlet></Outlet>
      </Container>
    </>
  );
}

export default App;
