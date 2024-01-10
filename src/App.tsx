import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
function App() {
  console.log(CssBaseline);

  return (
    <>
      <CssBaseline />
      <nav>nav bar</nav>
      <Outlet></Outlet>
    </>
  );
}

export default App;
