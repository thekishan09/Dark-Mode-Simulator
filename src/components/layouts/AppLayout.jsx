import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar/TopBar";

function AppLayout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <TopBar />
      <Outlet />
    </Box>
  );
}

export default AppLayout;
