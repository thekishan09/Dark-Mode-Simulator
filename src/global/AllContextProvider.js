import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import React from "react";

import { COLORS, FONT_SIZES, SPACING } from "../theme/commonStyles";
import theme from "../theme/theme";
import GlobalCssPriority from "./GlobalCssPriority";
import PlainCssPriority from "./PlainCssPriority";

const myTheme = {
  ...theme,
  colors: COLORS,
  fontSizes: FONT_SIZES,
  sizes: SPACING,
};

const AllContextProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={myTheme}>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <GlobalCssPriority>
          <PlainCssPriority>{children}</PlainCssPriority>
        </GlobalCssPriority>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default AllContextProvider;
