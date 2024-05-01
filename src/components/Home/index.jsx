import {
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Check1 } from "../../assets/check1.svg";
import { ReactComponent as Check2 } from "../../assets/check2.svg";
import { ReactComponent as Check3 } from "../../assets/check3.svg";
import { ReactComponent as MailModoLogo } from "../../assets/mailModoLogo.svg";
import useClasses from "../../hooks/useClasses";
import { styles } from "./styles";

import { postEmailId } from "../../api";
import { ReactComponent as SolidCheck } from "../../assets/check4.svg";
import Footer from "../../assets/footer_bg.svg";
import { ReactComponent as Trending } from "../../assets/trending.svg";
import { ReactComponent as YearReview } from "../../assets/year_review.svg";
import { Alert } from "../../global/Alert";
import { validateEmail } from "../../global/ValidateEmail";

const snippetValue = [
  {
    id: "01",
    subtitle: "Send your email template",
  },
  {
    id: "02",
    subtitle: "Preview in dark mode",
  },
  {
    id: "03",
    subtitle: "Share it with others",
  },
];

const CardData = [
  {
    value: "92%",
    title: "recipients view emails in dark mode",
    source: "Android Authority",
  },
  {
    value: "55-70%",
    title: "Dark mode adoption rate among Apple iOS users",
    source: "Night Eye App",
  },
  {
    value: "82%",
    title: "Android users prefer Dark mode",
    source: "Android Authority",
  },
  {
    value: "48%",
    title: "B2C brands optimize emails for dark mode",
    source: "Marketing Charts",
  },
];

const StepSnippet = ({ item }) => (
  <Stack direction="row" alignItems="center" spacing={1}>
    <Stack
      sx={{
        background: "#0c383f",
        borderRadius: "50%",
        height: "42px",
        width: "42px",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="body1" color="#1eb683">
        {item.id}
      </Typography>
    </Stack>
    <Stack>
      <Typography color="rgba(238, 238, 238, 1)">{item.subtitle}</Typography>
    </Stack>
  </Stack>
);

const Home = () => {
  const classes = useClasses(styles);
  const navigate = useNavigate();
  const [email, setEmail] = useState({ id: "", error: "" });

  const handleChange = (e) => {
    setEmail({ ...email, id: e.target.value });
  };

  const checkEmail = async () => {
    console.log(email.id);
    if (!validateEmail(email.id)) {
      setEmail({ ...email, error: "Email id is not valid." });
      return;
    }
    setEmail({ ...email, error: "" });
    const response = await postEmailId(
      email.id,
      "CheckDarkMode complete guide homepage"
    );
    if (response.success)
      Alert.showSuccess("Guide has been sent to your email id.");
    else Alert.showSuccess("Something went while sending you mail.");
  };

  const CardView = ({ data }) => {
    return (
      <Stack className={classes.cardView} key={data}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography
            color="rgba(43, 43, 129, 1)"
            variant="h3"
            fontWeight="bold"
          >
            {data.value}
          </Typography>
          <Trending />
        </Stack>
        <Typography variant="body1" sx={{ width: "80%" }}>
          {data.title}
        </Typography>
        <Stack mt={8}>
          <Typography color="rgba(16, 29, 37, 0.5)" variant="caption">
            Source:{data.source}
          </Typography>
        </Stack>
      </Stack>
    );
  };

  const FooterSnippet = ({ title }) => {
    return (
      <Stack direction="row" justifyContent="center" spacing={2} width="20%">
        <div>
          <SolidCheck />
        </div>
        <Typography
          sx={{
            fontSize: "15px",
            lineHeight: "22px",
            color: "#fff",
            fontWeight: "400",
          }}
        >
          {title}
        </Typography>
      </Stack>
    );
  };

  return (
    <Stack justifyContent="center" alignItems="center" width="100%">
      <Stack width="100%" className={classes.header}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          <Typography
            className={classes.heading}
            variant="h3"
            fontWeight="600"
            textAlign="center"
            sx={{ letterSpacing: "0.5" }}
          >
            Say goodbye to <br /> dark mode email surprises
          </Typography>

          <Typography mt={2} className={classes.subText} variant="body1">
            Check dark-mode compatibility before hitting send. See how it looks
            in Gmail, Outlook, Apple Mail & others.
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 5, p: 2, textTransform: "initial" }}
            onClick={() => navigate("/dark-mode-simulator")}
          >
            Preview in dark mode
          </Button>
          <Stack width="100%" mt={5} py={4} className={classes.snippetWrapper}>
            <Typography
              variant="body1"
              className={classes.getEmailWrapperTitle}
            >
              How it works
            </Typography>
            <Stack
              direction="row"
              justifyContent="center"
              width="100%"
              mt={3}
              spacing={15}
            >
              {snippetValue.map((item) => (
                <StepSnippet key={item.id} item={item} />
              ))}
            </Stack>
          </Stack>
          <YearReview className={classes.headerImage} />
        </Container>
      </Stack>

      <Container>
        <Stack component="section" mt={50} sx={{ width: "100%" }}>
          <Typography className={classes.sectionHeading} mb={5}>
            Different email clients render
            <br />
            emails differently in dark mode
          </Typography>
          <div>
            <img
              className={classes.inversionBg}
              alt=""
              src={require("../../assets/clients.svg").default}
            />
          </div>
        </Stack>

        <Stack component="section" mt={15} mb={20} alignItems="center">
          <Typography variant="h4" fontWeight="bold">
            Why Check for Dark Mode Compatibility
          </Typography>
          <Typography mt={2} variant="body1">
            No matter where you are on your email marketing journey, making
            emails dark-mode friendly has many benefits
          </Typography>

          <Stack direction="row" spacing={2} mt={5}>
            {CardData.map((item) => (
              <CardView data={item} />
            ))}
          </Stack>
        </Stack>

        <Stack
          component="section"
          my={15}
          justifyContent="center"
          alignItems="center"
        >
          <Typography className={classes.sectionHeading}>
            Become an expert with the Dark Mode Checklist
          </Typography>
          <Stack flexWrap="wrap">
            <Stack direction="row" spacing={3} mt={4}>
              <Stack p={5} component={Paper} className={classes.checklistCard}>
                <Check1 />
                <Typography className={classes.cardSubTitle}>
                  Add a stroke, border or background to dark logos
                </Typography>
              </Stack>
              <Stack p={5} component={Paper} className={classes.checklistCard}>
                <Check2 />
                <Typography className={classes.cardSubTitle}>
                  Design emails with 2 themes - for dark mode and light mode
                </Typography>
              </Stack>
              <Stack p={5} component={Paper} className={classes.checklistCard}>
                <Check3 />
                <Typography className={classes.cardSubTitle}>
                  Use bright colors which are legible in dark backgrounds
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={3} mt={4} sx={{ opacity: 0.4 }}>
              <Stack p={5} component={Paper} className={classes.checklistCard}>
                <Check1 />
                <Typography className={classes.cardSubTitle}>
                  Use white strokes around
                </Typography>
              </Stack>
              <Stack p={5} component={Paper} className={classes.checklistCard}>
                <Check2 />
                <Typography className={classes.cardSubTitle}>
                  Use transparent
                </Typography>
              </Stack>
              <Stack p={5} component={Paper} className={classes.checklistCard}>
                <Check3 />
                <Typography className={classes.cardSubTitle}>
                  Make sure social media icons
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack className={classes.getEmailWrapper} p={8}>
            <Typography className={classes.getEmailWrapperTitle}>
              Get dark-mode ready in minutes with the Dark Vader Guide
            </Typography>
            <Stack direction="row" sx={{ height: "66px" }} mt={5}>
              <TextField
                fullWidth
                value={email.Id}
                onChange={handleChange}
                InputLabelProps={{
                  style: { color: "#fff", padding: "5px", fontSize: "16px" },
                }}
                inputProps={{ style: { color: "#fff", fontSize: "18px" } }}
                variant="outlined"
                placeholder="Enter your email here and we'll send it to you"
                sx={{
                  color: "#fff",
                  height: "100%",

                  "& .MuiInputBase-root": {
                    height: "100%",
                  },
                  "& fieldset": {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                  "& input": {
                    height: "100%",
                  },

                  "& label.Mui-focused": {
                    color: "white",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "yellow",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                      borderRightColor: "transparent",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                      borderRightColor: "transparent",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                      borderRightColor: "transparent",
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#5858E0",
                  fontSize: "18px",
                  width: "20%",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  textTransform: "unset",
                  border: "2px solid white",
                  borderLeftColor: "transparent",
                  "&:hover": {
                    backgroundColor: "#5858E0",
                  },
                }}
                onClick={checkEmail}
              >
                Get it now
              </Button>
            </Stack>
            {email.error && (
              <Typography variant="subtitle1" color="#ff0c0c" p={1}>
                {email.error}
              </Typography>
            )}
          </Stack>
        </Stack>

        <Stack className={classes.tweetsWrapper} pt={5} my={15}>
          <Typography className={classes.sectionHeading}>
            You're not alone to face dark mode issues
          </Typography>
          <div>
            <img
              className={classes.tweetsImg}
              alt=""
              src={require("../../assets/tweetsBg.svg").default}
            />
          </div>
        </Stack>

        <Stack
          width="100%"
          height="750px"
          my={15}
          py={5}
          sx={{
            backgroundImage: `url(${Footer})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: "17px",
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="center">
            <Typography color="white">Powered By</Typography>
            <MailModoLogo className={classes.mailModoLogo} />
          </Stack>
          <Typography mt={5} className={classes.getEmailWrapperTitle}>
            The email marketing platform to supercharge your email-led growth
          </Typography>
          <Stack direction="row" spacing={4} mt={5} justifyContent="center">
            <FooterSnippet title="Create 3x converting interactive emails" />
            <FooterSnippet title="Send emails skipping spam folders" />
            <FooterSnippet title="Automate user journeys to save time" />
          </Stack>
          <Stack direction="row" justifyContent="center" mt={10}>
            <Button
              variant="contained"
              sx={{ p: 2, px: 3, textTransform: "initial" }}
            >
              Try FREE for 21 Days
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Home;
