import EmailIcon from "@mui/icons-material/Email";
import {
  Button,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveEmailBody } from "../../api";
import { Alert } from "../../global/Alert";
import useClasses from "../../hooks/useClasses";
import LoadingPage from "./Loading";
import { styles } from "./styles";

const RandomAlias = () =>
  Array(6)
    .fill(0)
    .map((x) => Math.random().toString(36).charAt(2))
    .join("");

const Email = () => {
  const classes = useClasses(styles);
  const [isLoading, setIsLoading] = useState(false);
  const [emailId, setEmailId] = useState({
    alias: "",
    email: "",
  });
  const [step, setStep] = useState(1);
  const [isCopied, setIsCopied] = useState(false);
  const navigate = useNavigate();

  const postEmailBody = async () => {
    const response = await saveEmailBody(emailId.email);
    if (response.status) {
      navigate("/" + emailId.alias);
      console.log(response.message.indexOf("amp"));
      response.message.indexOf("amp") !== -1
        ? Alert.showSuccess("AMP and HTML mail has been found")
        : Alert.showSuccess("Only HTML mail has been found");
    } else Alert.showWarning("No mail has been found for copied email id");
    setIsLoading(false);
  };

  const waitForGmail = () => {
    setTimeout(() => {
      postEmailBody();
    }, 10000);
    setIsLoading(true);
    // navigate("/" + emailId.alias);
  };

  const copyInputText = () => {
    navigator.clipboard.writeText(emailId.email);
    setIsCopied(true);
    setTimeout(() => {
      setStep(2);
    }, 3000);
  };

  const handleStep = (val) => {
    if (val === 1) setIsCopied(false);
    setStep(val);
  };

  useEffect(() => {
    const random = RandomAlias();
    setEmailId({
      alias: random,
      email: "admin+" + random + "@checkdarkmode.com",
    });
  }, []);

  const Snippet = ({ step, text }) => (
    <Stack alignItems="center" spacing={1}>
      <Typography
        textTransform="capitalize"
        className={classes.stepper}
        color="#20C58B"
        textAlign="center"
        variant="h6"
      >
        {step}
      </Typography>
      <Typography variant="h5" fontWeight="500" color="#0E063D">
        {text}
      </Typography>
    </Stack>
  );

  return (
    <Stack mt={10} height="100vh">
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Stack width="100%">
          {/* <Stack className={classes.getEmailWrapper}>
            <Stack mb={10}>
              <Typography className={classes.getEmailWrapperTitle}>
                Let's Get Started
              </Typography>
            </Stack>
          </Stack> */}
          {step === 1 && (
            <Stack width="100%" alignItems="center">
              <Snippet
                text="Send your email template to the address below"
                step="Step 1"
              />
              <Stack
                direction="row"
                justifyContent="center"
                sx={{ height: "50px", width: "50%" }}
                my={5}
              >
                <OutlinedInput
                  fullWidth
                  variant="outlined"
                  value={emailId.email}
                  InputProps={{
                    readOnly: true,
                  }}
                  size="small"
                  startAdornment={
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  }
                  disableFocusRipple
                  sx={{
                    height: "100%",
                    "& .MuiInputBase-root": {
                      height: "100%",
                    },
                    "& fieldset": {
                      borderColor: "#5858E0",
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      borderRightWidth: 0,
                    },
                    "& input": {
                      height: "100%",
                    },
                  }}
                />
                <Button
                  variant="outlined"
                  onClick={copyInputText}
                  disableElevation
                  sx={{
                    width: "30%",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    fontSize: "18px",
                    textTransform: "unset",
                    borderWidth: "2px",
                    borderColor: "#5858E0",
                    "&:hover": {
                      backgroundColor: isCopied
                        ? "rgba(88, 88, 224, 1)"
                        : "rgba(255, 255, 255)",
                      borderWidth: "2px",
                      borderLeftWidth: "1px",
                    },
                    backgroundColor: isCopied
                      ? "rgba(88, 88, 224, 1)"
                      : "rgba(88, 88, 224, 0.06)",

                    color: isCopied
                      ? "rgba(255, 255, 255)"
                      : "rgba(88, 88, 224, 1)",
                  }}
                >
                  {isCopied ? "Copied" : "Copy"}
                </Button>
              </Stack>
              <Typography
                variant="h6"
                sx={{ textDecoration: "underline", cursor: "pointer" }}
                color="rgba(88, 88, 224, 1)"
                mt={6}
                onClick={() => handleStep(2)}
              >
                Next
              </Typography>
            </Stack>
          )}
          {step === 2 && (
            <Stack alignItems="center">
              <Stack alignItems="center">
                <Snippet text="Sent the email? Confirm below" step="Step 2" />
                <Button
                  variant="contained"
                  sx={{ p: 2, my: 5, textTransform: "initial" }}
                  onClick={waitForGmail}
                >
                  Email Has Been Sent
                </Button>
              </Stack>
              <Typography
                variant="h6"
                sx={{ textDecoration: "underline", cursor: "pointer" }}
                color="rgba(88, 88, 224, 1)"
                mt={6}
                onClick={() => handleStep(1)}
              >
                Go Back
              </Typography>
            </Stack>
          )}
        </Stack>
      )}
    </Stack>
  );
};

export default Email;
