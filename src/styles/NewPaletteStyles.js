const drawerWidth = 300;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  navBtns: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none",
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    height: "100vh",
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    alignItems: "center",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: "0 0.5rem",
    width: "50%",
  },
  divider: {
    width: "100%",
  },
  PaletteList: {
    backgroundColor: "rgba(255, 195, 195, 0.7)",
    "& > div": {
      height: "calc(100vh - 64px)",
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gridTemplateRows: "repeat(4, 1fr)",
    },
  },
  tool_bar: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& ._left": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    "& ._right": {
      display: "flex",
      alignItems: "center",
      margin: "0 -5px",
      "& button": {
        margin: "5px 5px",
      },
    },
  },
  newPaletteTitle: {
    fontSize: "22px",
    textTransform: "uppercase",
    padding: "15px",
    margin: 0,
    fontWeight: "600",
  },
  paletteDesigner: {
    padding: "0 15px 80px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  designerBtns: {
    width: "100%",
    "& button": {
      width: "100% !important",
      margin: "0 0 15px",
    },
  },
});

export default styles;
