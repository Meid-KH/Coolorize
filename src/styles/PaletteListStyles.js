export default {
  bg_wrapper: {
    // backgroundColor: "#0652dd",
    // height: "100%",
    // overflow: "auto"
  },
  container: {
    height: "100%",
    width: "992px",
    maxWidth: "100%",
    margin: "0 auto",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingBottom: "40px"
  },
  row: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "30px"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "30px 0 40px",
    "& h1": {
      color: "#fff",
      fontSize: "36px",
      fontWeight: "600",
      lineHeight: "1",
      letterSpacing: "1px",
      margin: "0",
      textShadow: "0px 1px 0px #b13200"
    },
    "& a": {
      color: "#fff",
      fontSize: "16px",
      fontWeight: "500",
      textDecoration: "underline",
      display: "inline-block",
      textShadow: "0px 1px 0px #b13200"
    }
  }
};
