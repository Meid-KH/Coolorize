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
import DraggableList from './DraggableList';
import {arrayMove} from 'react-sortable-hoc';


import { ChromePicker } from 'react-color';

class  NewPalette extends Component {

  constructor (props) {
    super();
    this.state = {
      open : true,
      currentColor : "#0cffbc",
      paletteName : "",
      newColorName: "",
      colors : [{ color: "#0cffbc", name: "Teal light" }]
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
    // Palette name Rule
    ValidatorForm.addValidationRule('isPaletteNameUnique', value => 
      this.props.palettes.every( ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase() )
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
      name : this.state.newColorName,
      color : this.state.currentColor
    }
    this.setState({
      colors : [...this.state.colors, newColor],
      newColorName: ""
    });
    console.log('currentColor : '+ this.state.currentColor);
  }

  handleSubmitPalette = () => {
    const newPalette = {
      paletteName : this.state.paletteName,
      id : this.state.paletteName.toLowerCase().replace(/ /g, "-"),
      emoji : "😒",
      colors : this.state.colors
    }
    this.props.registerPalette(newPalette);
    this.props.history.push("/");
  }

  handleChange = (evt) => {
    const {value, name} = evt.target;
    this.setState({
       [name] : value
    });
  }
  // Handle delete draggable Colorbox
  handleDelete = (color_name) => {
    console.log('Delete the color', color_name);
    this.setState({
      colors : this.state.colors.filter( color => color.name !== color_name )
    });
  }
  ClearPalette = () => {
    this.setState( { colors : [] } );
  }
  addRandomColor = () => {
    const AllColors = this.props.palettes.map(palette => palette.colors).flat();
    const Random = Math.floor(Math.random() * AllColors.length) ;
    const RandomColor = AllColors[Random];
    this.setState({
      colors: [...this.state.colors, RandomColor]
    });
  }
  // On color box dragging ends 
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  render () {
    const {open, colors, currentColor, newColorName, paletteName} = this.state;
    const {classes} = this.props;


    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color="default"
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

            <ValidatorForm
              onSubmit={this.handleSubmitPalette}
              onError={errors => console.log(errors)}
              ref='form'
              >
              <TextValidator
                label="Palette name"
                onChange={this.handleChange}
                name="paletteName"
                value={paletteName}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={['this field is required', 'Palette name must be unique also !']}
                />
              <Button type="submit" variant="contained" color="secondary">
                Add palette name
              </Button>
            </ValidatorForm>

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

          <Button variant="contained" color="secondary" onClick={this.ClearPalette}>
            Clear palette
          </Button>
          <Button variant="contained" color="primary" onClick={this.addRandomColor}>
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
              name="newColorName"
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
            {/* {colors.map( color => 
            <DraggableColorBox key={color.name} backgroundColor={color.color} colorName={color.name} handleDelete={() => this.handleDelete(color.name)} /> ) } */}
            <DraggableList 
              colors={colors} 
              handleDelete={this.handleDelete} 
              axis="xy"
              onSortEnd={this.onSortEnd}
            />
          </div>
        </main>
      </div>
    );
  }
}
export default withStyles(styles)(NewPalette)
