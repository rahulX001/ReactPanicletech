import * as React from "react";
import "./App.css";
import BasicTable from "./components/BasicTable";
import Form from "./components/Form";
import Chart from "./components/Chart";
import ChartCountry from "./components/ChartCountry";
import FormCard from "./components/formCard";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ImgMediaCard from "./components/detailCard";
import { NavLink } from "react-router-dom";

const pages = ["Chart", "Table", "Form"];
function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center"></Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <NavLink to="/chart" style={{ textDecoration: "none" }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Chart
                </Button>
              </NavLink>
              <NavLink to="/table" style={{ textDecoration: "none" }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Table
                </Button>
              </NavLink>
              <NavLink to="/form" style={{ textDecoration: "none" }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Form
                </Button>
              </NavLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/table" element={<BasicTable />}></Route>
        <Route
          exact
          path="/persondetail/:id"
          element={<ImgMediaCard />}
        ></Route>
        <Route exact path="/form" element={<Form />}></Route>
        <Route exact path="/chart" element={<Chart />}></Route>
        <Route exact path="/chartcountry" element={<ChartCountry />}></Route>
        <Route exact path="/formCart" element={<FormCard />}></Route>
      </Routes>
    </>
  );
}

export default App;
