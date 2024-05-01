import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { postEmailId } from "../../api";
import { ReactComponent as Notification } from "../../assets/notification.svg";
import { validateEmail } from "../../global/ValidateEmail";

function Modal({ isOpen, handleClose, type }) {
  const [isCopy, setIsCopied] = useState(false);
  const [email, setEmail] = useState({ id: "", error: "" });
  const { pathname } = useLocation();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const handleChange = (e) => {
    setEmail({ ...email, id: e.target.value });
  };
  useEffect(() => {
    setIsEmailSent(false);
    setEmail({ id: "", error: "" });
  }, [isOpen]);

  const checkEmail = async () => {
    if (email.id.includes("http")) {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      return;
    }
    if (!email.id.includes("http") && !validateEmail(email.id)) {
      setEmail({ ...email, error: "Email id is not valid." });
      return;
    }
    setEmail({ ...email, error: "" });
    const response = await postEmailId(
      email.id,
      type === "email"
        ? "CheckDarkMode get playbook preview page"
        : "CheckDarkMode share preview",
      pathname.substring(1)
    );
    if (response.success)
      if (type !== "email") setEmail({ ...email, id: window.location.href });
      else setIsEmailSent(true);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="sm" fullWidth>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        mb={isEmailSent ? 0 : -2}
      >
        <DialogTitle
          sx={{ color: "#0E063D" }}
          fontSize={19}
          lineHeight="23px"
          fontWeight={700}
        >
          {isEmailSent
            ? ""
            : type === "email"
            ? "Get the email dark mode playbook"
            : "Share dark mode preview"}
        </DialogTitle>
        <IconButton onClick={handleClose} sx={{ mx: 2 }}>
          <CloseIcon sx={{ color: "#9C9C9C" }} />
        </IconButton>
      </Stack>
      {isEmailSent ? (
        <Stack justifyContent="center" alignItems="center" p={2}>
          <Notification />
          <Typography
            fontWeight={700}
            lineHeight="27px"
            fontSize={24}
            my={2}
            color="#0E063D"
          >
            Please check your inbox
          </Typography>
          <Typography
            fontWeight={500}
            lineHeight="24px"
            fontSize={15}
            color="#282828"
            width="55%"
            textAlign="center"
          >
            The Ultimate Dark Mode Email Playbook has been delivered to you
          </Typography>
        </Stack>
      ) : (
        <DialogContent>
          <DialogContentText sx={{ color: "#282828" }}>
            {type === "email"
              ? "Enter you email id and we will send it to you"
              : email.id.includes("http")
              ? "Anyone with the link will be able to view this"
              : "Enter you email id"}
          </DialogContentText>
          <Stack direction="row" width="100%" spacing={1} alignItems="center">
            <FormControl sx={{ my: 1 }} variant="outlined" fullWidth>
              <TextField
                autoFocus
                value={email.id}
                onChange={handleChange}
                sx={{ height: "56px", fontSize: "20px" }}
                placeholder="Email Id"
                type="email"
                fullWidth
                inputProps={{ input: { fontSize: 18 } }}
              />
            </FormControl>
            <Button
              variant="contained"
              sx={{
                width: "125px",
                height: "56px",
                background: isCopy && "#5DC286",
                "&:hover": {
                  background: isCopy && "#5DC286",
                },
              }}
              onClick={checkEmail}
            >
              {type === "email"
                ? "Get Now"
                : email.id.includes("http")
                ? isCopy
                  ? "Copied"
                  : "Copy"
                : "Get Link"}
            </Button>
          </Stack>
          {email.error && (
            <Typography variant="subtitle1" color="error">
              {email.error}
            </Typography>
          )}
        </DialogContent>
      )}
    </Dialog>
  );
}

export default Modal;
