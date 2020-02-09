// import bg_img from "./../icons/Sun-Tornado.svg";
import bg_img_v2 from "./../icons/Confetti-Doodles.svg";
import sizes from "./Sizes";
export default {
  colorPaletteWrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ee5522",
    backgroundImage: `url("${bg_img_v2}")`,
    /* background by SVGBackgrounds.com */
    backgroundAttachment: "fixed",
    [sizes.down("sm")]: {
      backgroundColor: "red"
    }
  }
};
