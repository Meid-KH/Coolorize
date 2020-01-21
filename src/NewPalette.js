import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import styles from './styles/NewPaletteStyles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import { ChromePicker } from 'react-color';

class  NewPalette extends Component {

  constructor (props) {
    super();
    this.state = {
      open : true,
      currentColor : "#ff0000",
      newColorName: "",
      colors : [{ color: "#ff0000", name: "Red" }]
    }
  }

  componentDidMount() {
    // Color name Rule
    ValidatorForm.addValidationRule('isColorNameUnique', value => 
      this.state.colors.every( ({name}) => name.toLowerCase() !== value.toLowerCase() )
    );
    // Color Rule
    ValidatorForm.addValidationRule('isColorUnique', () => 
      this.state.colors.every( ({color}) => color !== this.state.currentColor )
    );
  }

  handleDrawerOpen = () => {
    this.setState( { open : true } )
  };

  handleDrawerClose = () => {
    this.setState( { open : false } )
  };

  handleChangeComplete = (color) => {
    this.setState({
      currentColor : color.hex
    });
    // console.log(this.state.currentColor.hex);
  }

  handleAddColor = () => {
    const newColor = {
      color : this.state.currentColor,
      name : this.state.newColorName
    }
    this.setState({
      colors : [...this.state.colors, newColor],
      newColorName: ""
    });
    console.log('currentColor : '+ this.state.currentColor);
  }

  handleChange = (evt) => {
    this.setState({
      newColorName : evt.target.value
    });
  }

  render () {
    const {open, colors, currentColor, newColorName} = this.state;
    const {classes} = this.props;

    // console.log(colors);

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
              >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Persistent drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
          >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider className={classes.divider} />
          <Typography variant="h6" >
            Design your palette
          </Typography>

          <Button variant="contained" color="secondary">
            Clear palette
          </Button>
          <Button variant="contained" color="primary">
            Random color
          </Button>

          <ChromePicker
            color={ this.state.currentColor }
            onChangeComplete={ this.handleChangeComplete }
          />

          <ValidatorForm
            onSubmit={this.handleAddColor}
            onError={errors => console.log(errors)}
            ref='form'
            >
            <TextValidator
              label="Color name"
              onChange={this.handleChange}
              value={newColorName}
              validators={['required', 'isColorNameUnique', 'isColorUnique']}
              errorMessages={['this field is required', 'Color name is not valid', 'Color itself must be unique']}
              />
            <Button type="submit" variant="contained" color="secondary" style={{backgroundColor: currentColor.hex }}>
              Add color
            </Button>
          </ValidatorForm>


        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
          >
          <div className={classes.drawerHeader} />
          <div className={classes.PaletteList}>
            {colors.map( color => <div style={{backgroundColor: color.color}}> <h1>{color.name}</h1> </div> ) }
          </div>
        </main>
      </div>
    );
  }
}
export default withStyles(styles)(NewPalette)
