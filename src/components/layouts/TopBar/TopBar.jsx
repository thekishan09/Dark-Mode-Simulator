import { AppBar, Toolbar } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { ReactComponent as Logo1 } from "../../../assets/logo_white.svg";
import { ReactComponent as Powered } from "../../../assets/powered.svg";
import { ReactComponent as Powered1 } from "../../../assets/powered_white.svg";
function TopBar() {
  const location = useLocation();
  const [isHome, setIsHome] = useState(true);
  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location]);

  return (
    <AppBar
      sx={{
        background: isHome ? "#080A1C" : "transparent",
        boxShadow:
          "0px 2px 4px -1px rgb(0 0 0 / 0%), 0px 4px 5px 0px rgb(0 0 0 / 0%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
      }}
      position="static"
    >
      <Toolbar>
        {isHome ? (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "100%", mx: 2 }}
          >
            <Link to="/">
              <Logo1 />
            </Link>
            <Powered1 width={210} height={80} />

            {/* <Stack direction="row" alignItems="center" spacing={2}>
              <Typography
                variant="body1"
                sx={{
                  color: "#fff",
                  fontWeight: "semibold",
                  cursor: "pointer",
                }}
              >
                Best Practices
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#fff",
                  fontWeight: "semibold",
                  cursor: "pointer",
                }}
              >
                History
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "1px solid #fff",
                  "&:hover": {
                    backgroundColor: "transparent",
                    border: "1px solid #fff",
                  },
                }}
              >
                SignUp
              </Button>
            </Stack> */}
          </Stack>
        ) : (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "100%", mx: 2 }}
          >
            <Link to="/">
              <Logo />
            </Link>
            <Powered />

            {/* <Stack direction="row" alignItems="center" spacing={2}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#000",
                    fontWeight: "semibold",
                    cursor: "pointer",
                  }}
                >
                  Best Practices
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#000",
                    fontWeight: "semibold",
                    cursor: "pointer",
                  }}
                >
                  History
                </Typography>
                <Button variant="contained">Login</Button>
                <Button
                  variant="outlined"
                  sx={{ backgroundColor: "transparent" }}
                >
                  SignUp
                </Button>
              </Stack> */}
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
