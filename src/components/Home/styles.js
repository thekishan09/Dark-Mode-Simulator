import bgImage from "../../assets/header_bg.svg";
export const styles = (theme) => ({
  logoIpsum: {
    fontSize: "28px",
    fontWeight: 700,
    color: "transparent",
    textShadow: "0 0 0 #33333333",
    background: "linear-gradient(to right,#000 0%,#000 50%,#fff 50%,#fff 100%)",
    backgroundClip: "text",
    marginLeft: "10px",
  },
  heading: {
    color: "rgba(249, 252, 255, 1)",
    fontSize: "60px",
  },
  subText: {
    color: "rgba(249, 252, 255, 1)",
  },
  contentWrapper: {
    width: "80%",
    background: "#FFFFFF",
    boxShadow: "0px 14px 64px rgba(13, 0, 66, 0.08)",
    backdropFilter: "blur(22px)",
    borderRadius: "12px",
  },
  heroText: {
    fontFamily: "'Clash Display'",
    fontStyle: "normal",
    fontWeight: 600,
    textTransform: "uppercase",
    lineHeight: 0.8,
    color: "transparent",
    textShadow: "0 0 0 #33333333",
    background:
      "linear-gradient(to right,#2C366E 0%,#2C366E 50%,#D3C991 50%,#D3C991 100%)",
    backgroundClip: "text",
  },
  heroTextDate: {
    fontSize: "45px",
  },
  heroTextTitle: {
    fontSize: "139.45px",
    textAlign: "center",
  },
  heroTextYear: {
    position: "relative",
    "&::before": {
      content: "'2022'",
      fontSize: "45px",
      position: "absolute",
      top: -30,
      color: "#2C366E",
    },
  },
  heroSubText: {
    width: "75%",
    fontSize: "24px",
    lineHeight: "34px",
    textAlign: "center",
    color: "transparent",
    textShadow: "0 0 0 #33333333",
    background:
      "linear-gradient(to right,#2C366E 0%,#2C366E 50%,#D3C991 50%,#D3C991 100%)",
    backgroundClip: "text",
  },

  quoteText: {
    fontWeight: 700,
    fontSize: "34px",
    lineHeight: "43px",
    color: "transparent",
    textShadow: "0 0 0 #33333333",
    background:
      "linear-gradient(to right,#2C366E 0%,#2C366E 50%,#D3C991 50%,#D3C991 100%)",
    backgroundClip: "text",
  },
  quoteWriter: {
    fontSize: "23px",
    lineHeight: "29px",
  },
  leftQuote: {
    position: "absolute",
    left: "10%",
    top: "-5%",
    color: "#2C366E",
  },
  rightQuote: {
    position: "absolute",
    bottom: "-5%",
    right: "10%",
  },
  sectionHeading: {
    fontWeight: 600,
    fontSize: "42px",
    lineHeight: "135.52%",
    textAlign: "center",
    color: "#0E063D",
    zIndex: 1,
  },
  cardTitle: {
    fontWeight: 600,
    fontSize: "48px",
    lineHeight: "83px",
    color: "#0E063D",
  },
  cardSubTitle: {
    fontSize: "20px",
    lineHeight: "149.52%",
    color: "#000",
  },
  getEmailWrapper: {
    width: "100%",
    marginTop: "-2%",

    boxSizing: "border-box",

    height: "304px",
    background:
      "radial-gradient(30.18% 155.59% at 7.21% 100%, #24146C 0%, rgba(32, 13, 107, 0) 100%) , #2B2B81",
    border: "1px solid rgba(255, 255, 255, 0.28)",
    boxShadow: "0px 14px 64px rgba(13, 0, 66, 0.08)",
    backdropFilter: "blur(22px)",
    borderRadius: "32px",
  },
  getEmailWrapperTitle: {
    fontWeight: 600,
    fontSize: "25px",
    lineHeight: "135.52%",
    textAlign: "center",
    color: "white",
  },
  mailModoLogo: {
    width: "20%",
    marginLeft: "1%",
  },
  horizontalLine: {
    border: " 1px solid",
    width: "100%",
    borderImageSource:
      "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 52.6%, rgba(255, 255, 255, 0) 100%)",
  },
  cardView: {
    boxSizing: "border-box",
    width: "292px",
    height: "276px",

    background: "#FFFFFF",
    boxShadow: "0px 14px 64px rgba(0, 64, 33, 0.08)",
    backdropFilter: "blur(22px)",
    borderRadius: "12px",
    borderBottom: "10px solid rgba(43, 43, 129, 1)",
    paddingTop: "5%",
    paddingLeft: "2%",
  },
  header: {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    height: "900px",
    position: "relative",
  },
  headerImage: {
    height: "100vh",
    position: "absolute",
    top: "60%",
  },
  snippetWrapper: {
    borderTop: "1px solid",
    // borderBottom: "1px solid",

    borderImageSlice: 1,
    borderImageSource:
      "linear-gradient(270deg, rgba(255, 255, 255,0) 0%, rgba(255,255,255,0.25) 53%, rgba(255, 255, 255, 0) 100%)",
  },
  paraText: {
    fontFamily: "Inter",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "23px",
    letterSpacing: "0em",
    textAlign: "left",
  },
  tweetsWrapper: {
    background: "#F6F8FC",
    borderRadius: "43px",
  },
  tweetsImg: {
    width: "100%",
    height: "100%",
    marginTop: "-7%",
  },
  checklistCard: {
    flex: 1,
  },
  inversionBg: {
    width: "100%",
  },
});
