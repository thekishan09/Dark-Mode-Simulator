import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import AMP from "../../assets/amp.gif";
import { ReactComponent as Check } from "../../assets/check.svg";

const style = {
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "28px",
  letterSpacing: "0em",
  textAlign: "left",
};

const handleURL = () => {
  window
    .open("https://mailmodo.com?utm_source=checkdarkmode", "_blank")
    .focus();
};

function AMPViewer() {
  const ListItem = ({ title }) => {
    return (
      <Stack direction="row" spacing={1} flexWrap="">
        <div>
          <Check style={{ marginTop: "4px" }} />
        </div>
        <Typography sx={style}>{title}</Typography>
      </Stack>
    );
  };
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={4}
      sx={{
        background: "rgba(255, 255, 255)",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      }}
    >
      <Typography variant="h5" color="#0E063D" fontWeight="bold">
        Still not using AMP emails? 😕
      </Typography>
      <Stack
        sx={{
          background: "#FFFFFF",
          boxShadow: "0px 14px 35px rgba(13, 0, 66, 0.15)",
          borderRadius: "8px",
          width: "80%",
        }}
        p={2}
        direction="row"
      >
        <Stack height="280px" width="280px">
          <img
            src={AMP}
            alt=""
            height="280px"
            width="280px"
            style={{ "border-radius": "11px" }}
          />
        </Stack>
        <Stack alignItems="center">
          <Typography variant="body1" fontWeight="bold">
            With AMP emails, you can
          </Typography>
          <Stack p={2} spacing={2}>
            <ListItem title="Add forms, quiz, poll, calendar & more inside emails" />
            <ListItem
              title="Let your users engage & take action without switching to a
                landing page"
            />
            <ListItem title="Get higher engagement & conversions" />
          </Stack>
        </Stack>
      </Stack>
      <Stack mt={4} alignItems="center" spacing={2}>
        <Typography variant="h6" color="#0E063D" fontWeight="bold">
          Create & Send AMP emails easily with Mailmodo
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: "#5858E0",
            width: "191px",
            textTransform: "initial",
          }}
          onClick={handleURL}
        >
          Try Mailmodo for FREE
        </Button>
      </Stack>
    </Stack>
  );
}

export default AMPViewer;
