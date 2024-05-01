import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

export const COLORS = {
  primary: "#5858E0",
  secondary: "##F4F6FD",
  accent: "#0E063D",
  text1: "#fff",
  text2: "#000",
  bg: "##F6F8FC",
};

export const FONT_SIZES = {
  regular: "1rem",
  h1: "3.052rem",
  h2: "2.441rem",
  h3: "1.953rem",
  h4: "1.563rem",
  h5: "1.25rem",
  small: "0.8rem",
};

export const SPACING = {
  size_1: "0.5rem",
  size_2: "1rem",
  size_3: "1.5rem",
  size_4: "2rem",
  size_5: "2.5rem",
  size_6: "3rem",
  size_7: "3.5rem",
  size_8: "4rem",
  size_9: "4.5rem",
  size_10: "5rem",
};

export const RouterLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  width: 100%;
`;

export const FlexBox = styled(Box)`
  display: ${({ flex }) => (flex ? "flex" : "inherit")};
  flex-direction: ${({ col }) => (col ? "column" : "row")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
`;
