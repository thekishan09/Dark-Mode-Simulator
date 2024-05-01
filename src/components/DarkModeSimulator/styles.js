// const bottomUp = `@keyframes bar
// {
//   0% {
//     transform: "translateY(100%)";
//     height: 0;
//   }
//   100% {
//     transform: "translateY(-100%)";
//     height: 100%;
//   }
// }`;

export const styles = () => ({
  banner: {
    background:
      "radial-gradient(133.51% 1543.38% at -79.75% 162.57%, rgba(219, 206, 255, 0.64) 0%, rgba(219, 206, 255, 0) 100%) , radial-gradient(301.23% 706.2% at 121.07% -174.01%, #CDA6FF 0%, rgba(205, 166, 255, 0) 100%), linear-gradient(71.21deg, #612AFE -1.51%, #2A73FE 98.56%)",
    transform: "translateY(100%)",
    height: 0,
    transition: "all 0.1s ease",
  },
  bannerShow: {
    transform: "unset",
    height: "unset",
  },
});
