import bg_img from "./../icons/Sun-Tornado.svg";
import sizes from "./Sizes";
export default {
  colorPaletteWrapper: {
    minHeight: "100vh",
    // overflow: 'hidden',
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ee5522",
    backgroundImage: `url("${bg_img}")`,
    /* background by SVGBackgrounds.com */
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    [sizes.down("sm")]: {
      backgroundColor: "red"
    }
  }
};
