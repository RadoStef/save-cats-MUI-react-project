import React, { Fragment, useState } from "react";
import { Button, Container, Box } from "@mui/material";
import { styles } from "./styles.js";
import logo from "./logo.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import AccordionElement from "./AccordionElement.js";
import ListElement from "./ListElement.js";

const Header = () => {
  const [state, setState] = useState({ left: false });
  const accordion = <AccordionElement />;
  const listЕlement = <ListElement />;

  const drawerCategories = [
    "Home",
    "Volonteer",
    accordion,
    "Login",
    "Contact Us",
  ];
  const pages = ["Home", "Volonteers", listЕlement, "Login", "Contact Us"];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "250px", background: "#858585" }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={styles.drawerList}>
        {drawerCategories.map((text) => (
          <Fragment key={text}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            <Divider variant="middle" sx={{ background: "#3f7489" }} />
          </Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={styles.headerWrapper}>
      <Container maxWidth="100%">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <img src={logo} alt="Logo" style={styles.img} />
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <MenuIcon sx={{ color: "black" }} disableRipple />
                </Button>
              <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              // variant='persistent'
              elevation={4}
              >
              {list(anchor)}
              </Drawer>
              </React.Fragment>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img src={logo} alt="Logo" style={styles.img} />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button key={page} sx={styles.button}>
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box sx={styles.iconDivider}>
              <FavoriteIcon sx={{ color: "#abafb3", cursor: "pointer" }} />
            </Box>
            <Box sx={styles.iconDivider}>
              <PersonIcon sx={{ color: "#abafb3", cursor: "pointer" }} />
            </Box>
            <Box sx={styles.iconDivider2}>
              <NotificationsIcon sx={{ color: "#abafb3", cursor: "pointer" }} />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
