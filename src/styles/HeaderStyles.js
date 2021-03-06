import sizes from "./Sizes";

export default {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    height: "5vh",
    backgroundColor: "#fff",
    [sizes.down("md")]: {
      height: '20vh',
    }
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: 22,
    backgroundColor: "#eceff1",
    fontFamily: "Roboto, sans-serif",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "#272727",
      fontWeight: 700
    }
  },
  slider_container: {
    "& span": {
      fontWeight: 600
    }
  },
  slider_range: {
    width: 340,
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent"
    },
    "& .rc-slider-rail": {
      height: 8
    },
    "& .rc-slider-handle, & .rc-slider-handle:active,& .rc-slider-handle:hover, & .rc-slider-handle:focus": {
      backgroundColor: "green",
      outline: "none",
      border: "2px solid green",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginLeft: "-7px",
      marginTop: "-3px"
    }
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem"
  }
};
