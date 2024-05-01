import ReplayIcon from "@mui/icons-material/Replay";
import { Container, Grid, Stack, Typography } from "@mui/material";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getEmailBody } from "../../api";
import { ReactComponent as AMP } from "../../assets/amp_button.svg";
import { ReactComponent as HTML } from "../../assets/html_button.svg";
import { ReactComponent as Link } from "../../assets/link1.svg";
import { Alert } from "../../global/Alert";
import AMPViewer from "./ampViewer";
import Modal from "./modal";
import { Preview } from "./Preview/Preview";

const DarkModeSimulator = () => {
  // const classes = useClasses(styles);
  const [value, setValue] = React.useState(0);

  const [htmlBody, setHtmlBody] = useState({ html: "", amp: "" });
  const [isAMP, setIsAMP] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState({
    isOpen: false,
    type: "share",
  });
  const location = useLocation();
  const navigate = useNavigate();

  const apiHandler = async () => {
    const response = await getEmailBody(location.pathname.substring(1));

    if (response.status) {
      const body = {
        html: response.htmlBody,
        amp: response?.ampBody ? response.ampBody : "",
      };
      setHtmlBody(body);
      setValue((val) => val + 1);
    } else {
      Alert.showError("Something wrong while fetching email body");
    }
  };

  useEffect(() => {
    apiHandler();
    // eslint-disable-next-line
  }, []);

  const handleOpenModal = (value) => {
    if (value === "share")
      setIsModalOpen({ ...isModalOpen, isOpen: true, type: "share" });
    else setIsModalOpen({ ...isModalOpen, isOpen: true, type: "email" });
  };
  const handleModalClose = () => {
    setIsModalOpen({ ...isModalOpen, isOpen: !isModalOpen.isOpen });
  };

  const handleAMP = (val) => {
    if (val !== isAMP) {
      setIsAMP(val);
      setValue(0);
    }
  };
  const goBack = () => {
    navigate("/dark-mode-simulator");
  };

  const checkIfAMP = (val) => {
    if (val && isAMP && !htmlBody.amp) {
      if (value !== 0) setValue(0);
      return true;
    }

    if (!val && htmlBody.amp && isAMP) {
      if (value !== 0 && val) setValue((val) => val);
      return true;
    }
    return false;
  };

  const ButtonsData = [
    {
      id: 0,
      title: "Original",
      subtitle1: "No color changes. Email will render as it is originally.",
      subtitle2: "Clients: Apple Mail (macOS, iOS)",
    },
    {
      id: 1,
      title: "Partial Inversion",
      subtitle1:
        "Light background will be converted to dark background. Dark background will stay as it is. Dark text will be converted to light text. Light text will stay as it is. Images will stay as they are.",
      subtitle2:
        "Clients: Gmail (Android), Outlook (iOS, macOS,webmail,android)",
    },
    {
      id: 2,
      title: "Full Inversion",
      subtitle1:
        "Light background will be converted to dark background. Dark background will be converted to light background. Light text will be converted to dark text. Dark text will be converted to light text.",
      subtitle2: "Clients: Gmail (iOS), Outlook (Windows)",
    },
  ];

  const InversionButtons = ({ id, title, subtitle1, subtitle2 }) => {
    return (
      <Stack
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          background: "#F4F6FD",
          borderRadius: "8px",
          px: 2,
          py: 1,
          border: value === id && "1px solid #5858E0",
          cursor: "pointer",
        }}
        onClick={() => {
          setValue(id);
        }}
      >
        <Stack direction="row" justifyContent="space-between" width="100%">
          <Typography
            sx={{
              color: value === id ? "#5858E0" : "#000",
              fontWeight: "500",
            }}
          >
            {title}
          </Typography>
          {value === id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Stack>
        {value === id && (
          <>
            <Typography
              fontSize={12}
              fontWeight="400"
              lineHeight="18px"
              textAlign="left"
              color="GrayText"
              mt={1}
            >
              {subtitle1}
            </Typography>
            <br />
            <Typography
              fontSize={12}
              fontWeight="500"
              lineHeight="18px"
              textAlign="left"
              color="GrayText"
            >
              {subtitle2}
            </Typography>
          </>
        )}
      </Stack>
    );
  };

  return (
    <Container sx={{ py: 7 }}>
      <Grid container spacing={2} sx={{ height: "90vh" }}>
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen.isOpen}
            handleClose={handleModalClose}
            type={isModalOpen.type}
          />
        )}
        <Grid xs={4} item px={5} py={0}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Preview
            </Typography>
            <Stack
              direction="row"
              sx={{ cursor: "pointer", marginTop: 1.5 }}
              onClick={goBack}
            >
              <ReplayIcon sx={{ color: "#B1AEC2" }} />
              <Typography
                sx={{ textDecoration: "underline", color: "#B1AEC2" }}
              >
                Test another email
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={2} my={2}>
            <Typography variant="body1" sx={{ fontWeight: "500" }}>
              Mode
            </Typography>
            {ButtonsData.map((item) => (
              <InversionButtons {...item} />
            ))}
          </Stack>
          <Stack>
            <Typography variant="body1" sx={{ fontWeight: "500" }} my={1}>
              Email Type
            </Typography>
            <Stack direction="row" mt={1} width={330}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  background: "#F4F6FD",
                  border: !isAMP && "1px solid #5858E0",
                  borderRadius: "10px",
                  px: 2,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  py: 1.5,
                  cursor: "pointer",
                }}
                width="100%"
                onClick={() => handleAMP(false)}
              >
                <HTML />
                <Stack>
                  <Typography
                    lineHeight="17px"
                    fontWeight={500}
                    fontSize={14}
                    color="#0E063D"
                  >
                    HTML
                  </Typography>
                  <Typography
                    fontWeight={500}
                    lineHeight="12px"
                    fontSize={10}
                    color="rgba(14, 6, 61, 0.7)"
                  >
                    Static Emails
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                width="100%"
                sx={{
                  background: "#F4F6FD",
                  border: isAMP && "1px solid #5858E0",
                  borderRadius: "10px",
                  px: 2,
                  py: 1.5,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  cursor: "pointer",
                }}
                onClick={() => handleAMP(true)}
              >
                <AMP />
                <Stack>
                  <Typography
                    lineHeight="17px"
                    fontWeight={500}
                    fontSize={14}
                    color="#5858E0"
                  >
                    AMP
                  </Typography>
                  <Typography
                    fontWeight={500}
                    lineHeight="12px"
                    fontSize={10}
                    color="rgba(88, 88, 224, 0.7)"
                  >
                    Interactive Emails
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            mt={3}
            direction="row"
            sx={{ cursor: "pointer" }}
            onClick={() => handleOpenModal("share")}
          >
            <Link />
            <Typography
              sx={{ textDecoration: "underline", color: " #5858E0", ml: 1 }}
            >
              Share this preview with your team
            </Typography>
          </Stack>
          <Stack
            sx={{
              background:
                "radial-gradient(133.51% 1543.38% at -79.75% 162.57%, rgba(219, 206, 255, 0.64) 0%, rgba(219, 206, 255, 0) 100%) , radial-gradient(301.23% 706.2% at 121.07% -174.01%, #CDA6FF 0%, rgba(205, 166, 255, 0) 100%), linear-gradient(71.21deg, #612AFE -1.51%, #2A73FE 98.56%)",
              borderRadius: "12px",
              width: "331px",
              height: "95px",
            }}
            mt={3}
            p={3}
            justifyContent="center"
          >
            <Typography variant="caption" color="white">
              Want to improve your emails ?
            </Typography>
            <Typography
              sx={{ textDecoration: "underline", cursor: "pointer" }}
              color="white"
              onClick={() => handleOpenModal("email")}
            >
              Get our Email Dark Mode Playbook
            </Typography>
          </Stack>
        </Grid>
        <Grid
          xs={8}
          item
          sx={{
            backgroundColor: "#F6F8FC",
            position: "relative",
            paddingLeft: "0 !important",
            overflow: "hidden",
          }}
        >
          <Preview
            value={value}
            codeData={checkIfAMP(0) ? htmlBody.amp : htmlBody.html}
          />
          {checkIfAMP(0) && <AMPViewer />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default DarkModeSimulator;
