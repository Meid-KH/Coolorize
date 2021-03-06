export default {
  wrapper: {
    backgroundColor: "#fff",
    color: "#272727",
    padding: "8px",
    borderRadius: "4px",
    cursor: "pointer",
    position: "relative",
    "&:hover button": {
      opacity: 1
    }
  },
  inner: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: " repeat(4, 1fr)",
    minHeight: "140px",
    borderRadius: "4px",
    overflow: "hidden",
    backgroundColor: "#e5e5e5"
  },
  title: {
    fontSize: "18px",
    lineHeight: "1",
    padding: "15px 0",
    margin: "0 0 -8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  DeleteButtun: {
    position: "absolute",
    right: 0,
    top: 0,
    background: "rgb(245, 0, 87, 1)",
    color: "#fff",
    borderRadius: "4px",
    zIndex: 2,
    opacity: 0,
    "&:hover": {
      backgroundColor: "rgb(245, 0, 87,1)"
    }
  }
};
