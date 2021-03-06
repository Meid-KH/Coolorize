import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";
import { Spring } from "react-spring/renderprops";

const styles = {
  root: {
    // height: "100%",
    borderRadius: "2px",
    position: "relative",
    color: "rgba(0,0,0,0.5)",
    "&:hover button": {},
    "& span": {
      fontWeight: "600"
    }
  },
  boxContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "auto",
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    padding: "0 15px"
  },
  delete: {
    transition: ".2s",
    marginRight: "-12px"
  }
};

const DraggableColorBox = SortableElement(props => {
  const { colorName, backgroundColor, classes, handleDelete, index } = props;
  return (
    <Spring
      // delay={`${index}00`}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      onRest={props => {
        console.log("rested");
      }}
    >
      {({ opacity }) => (
        <div className={classes.root} style={{ backgroundColor, opacity }}>
          <div className={classes.boxContent}>
            <span>{colorName}</span>
            <IconButton
              color="inherit"
              aria-label="Delete color"
              onClick={handleDelete}
              edge="start"
              className={classes.delete}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      )}
    </Spring>
  );
});

export default withStyles(styles)(DraggableColorBox);
