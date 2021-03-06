import sizes from "./Sizes";

export default {
  palette_wrapper: {
    flex: 1,
    overflow: "hidden"
  },
  palette: {
    height: '90vh',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr)) ',
    // gridTemplateRows: 'repeat(4, 1fr)',
    "&._single": {
      gridTemplateRows: 'repeat(2, 1fr)',
    },
    [sizes.down("md")]: {
      overflowY: "auto",
      height: '80vh',
    }
  },
  colorBox: {
    "&.go_back" : {
      backgroundColor: '#272727',
      position: 'relative',
    },
    "& .back_button": {
      textTransform: 'uppercase',
      textAlign: 'center',
      fontSize: 14,
      fontWeight: 500,
      minWidth: 70,
      borderRadius: 2,
      display: 'inline-block',
      padding: '5px 10px',
      letterSpacing: '.5px',
      lineHeight: 1,
      textDecoration: 'none',
      color: '#fff',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      userSelect: 'none',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
    },
  }
}