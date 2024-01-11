import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

// const drawerWidth = 240;
const navItems = ["posts"];

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // const drawer = (
  //   <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       Blog
  //     </Typography>
  //     {/* divide like <hr /> */}
  //     <Divider />
  //     <List>
  //       {navItems.map((item) => (
  //         <ListItem key={item} disablePadding>
  //           <ListItemButton sx={{ textAlign: "center" }}>
  //             <ListItemText primary={item} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar component="nav" sx={{ backgroundColor: "success.light" }}>
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            // sx={{
            //   display: { xs: "none", sm: "block" },
            // }}
            display={"flex"}
            // alignItems={"flex-start"}
            flexGrow={1}
            justifyContent={"flex-start"}
          >
            {navItems.map((item) => (
              <Link
                component={RouterLink}
                to={`/${item}`}
                key={item}
                color={"primary.contrastText"}
                variant="h5"
                sx={{
                  textDecoration: "none",
                  border: "1px dashed white",
                  p: 1,
                  borderRadius: 2,
                  "&:hover": {
                    border: "1px dashed white",
                    p: 1.2,
                  },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
          <Typography
            variant="body1"
            component={RouterLink}
            to={"/"}
            sx={{
              display: { xs: "none", sm: "block" },
              color: "white",
              textDecoration: "none",
            }}
          >
            Blog
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
  {
    /* <nav>
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav> */
  }
};

export default NavBar;
