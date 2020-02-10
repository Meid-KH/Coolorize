export default {
  bg_wrapper: {
    // backgroundColor: "#0652dd",
    // height: "100%",
    // overflow: "auto"
  },
  container: {
    height: "100%",
    maxWidth: "992px",
    margin: "0 auto",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingBottom: "40px"
  },
  row: {
    display: "grid",
    // gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gridGap: "30px"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "30px 0 40px",
    "& h1": {
      color: "#fff",
      fontSize: "40px",
      fontFamily: "Roboto Slab",
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: "1px",
      margin: "0",
      paddingRight: "20px",
      textShadow: "3px 2px 1px #3c009b"
    },
    "& a": {
      color: "#fff",
      fontSize: "16px",
      fontWeight: "500",
      textDecoration: "underline",
      display: "inline-block"
    }
  }
};
