import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Loading from "../../assets/loading.json";
import { ReactComponent as Bulb } from "../../assets/bulb.svg";
import useClasses from "../../hooks/useClasses";
import { styles } from "./styles";
import { useLottie } from "lottie-react";

const options = {
  animationData: Loading,
  loop: true,
};

function LoadingPage() {
  const classes = useClasses(styles);
  const { View } = useLottie(options);
  return (
    <Stack justifyContent="center" alignItems="center">
      <Stack width={300} height={200}>
        {View}
      </Stack>
      <Typography color="gray" variant="h5" mt={2}>
        Please wait while we look for your email...
      </Typography>
      <Stack
        mt={20}
        direction="row"
        className={classes.loadingDesc}
        justifyContent="center"
        alignItems="center"
        p={2}
      >
        <Bulb />
        <Typography fontSize={18} textAlign="center">
          &nbsp; Psst... did you know that you can directly create stunning,
          dark-mode compatible emails with &nbsp;
        </Typography>
        <Typography
          component="a"
          fontSize={18}
          target="_blank"
          href="https://mailmodo.com?utm_source=checkdarkmode"
          sx={{
            textDecoration: "underline",
            cursor: "pointer",
            color: "#0E063D",
          }}
        >
          Mailmodo
        </Typography>
        <Typography fontSize={18}>?</Typography>
      </Stack>
    </Stack>
  );
}

export default LoadingPage;
