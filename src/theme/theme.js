import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#5858E0",
    },
  },
  typography: {
    fontFamily: `'Inter', sans-serif`,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
  },
  shape: {
    borderRadius: 10,
  },
});
export default theme;
