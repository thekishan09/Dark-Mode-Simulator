import * as React from "react";
import { StyledEngineProvider } from "@mui/material/styles";

export default function GlobalCssPriority({ children }) {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
}
