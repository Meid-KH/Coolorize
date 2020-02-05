import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      DialogId: ""
    };
  }

  TriggerDialog = ID => {
    this.setState({ open: true, DialogId: ID });
  };

  CloseDialog = () => {
    this.setState({
      open: false,
      DialogId: ""
    });
  };

  ConfirmDelete = () => {
    this.props.handleDeletePalette(
      this.state.DialogId,
      this.setState({
        open: false,
        DialogId: ""
      })
    );
  };

  render() {
    const { open } = this.state;
    const { classes, palettes, history } = this.props;
    const redirectToPalette = id => {
      // console.log("Redirect to : ",id);
      history.push(`/palette/${id}`);
    };
    return (
      <section className={classes.bg_wrapper}>
        <div className={classes.container}>
          <header className={classes.header}>
            <h1>Color palettes list</h1>
            <Link
              exact="true"
              to="/palette/new"
              className={classes.new_palette}
            >
              Create new Palette
            </Link>
          </header>
          <div className={classes.row}>
            {palettes.map(palette => (
              <MiniPalette
                TriggerDialog={this.TriggerDialog}
                key={palette.id}
                {...palette}
                handleRedirect={() => redirectToPalette(palette.id)}
              />
            ))}
          </div>
        </div>

        <Dialog
          open={open}
          onClose={this.CloseDialog}
          aria-labelledby="delete-dialog-title"
        >
          <DialogTitle>Deleting your palette ...</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure, you want to delete this color palette from your list
              ?
            </DialogContentText>
          </DialogContent>
          <DialogActions margin="normal">
            <Button
              onClick={this.CloseDialog}
              variant="outlined"
              color="secondary"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              onClick={this.ConfirmDelete}
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </section>
    );
  }
}

export default withStyles(styles)(PaletteList);
