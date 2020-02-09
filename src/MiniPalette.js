import React from "react";
import { Spring } from "react-spring/renderprops";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const MiniPalette = props => {
  const { classes, paletteName, emoji, colors, TriggerDialog, id } = props;

  const handleDeleteClick = evt => {
    evt.stopPropagation();
    TriggerDialog(id);
  };

  return (
    <div className={classes.wrapper} onClick={props.handleRedirect}>
      <IconButton
        aria-label="Delete Palette"
        onClick={handleDeleteClick}
        edge="start"
        className={classes.DeleteButtun}
        color="secondary"
      >
        <DeleteIcon />
      </IconButton>
      <div className={classes.inner}>
        {colors.map(color => (
          <div key={color.name} style={{ background: color.color }}></div>
        ))}
      </div>
      <h2 className={classes.title}>
        {paletteName} <span> {emoji}</span>
      </h2>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
