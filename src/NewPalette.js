import React, { Component } from 'react';
import NewPaletteHeader from './NewPaletteHeader';
import ColorPicker from './ColorPicker';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import styles from './styles/NewPaletteStyles';
import Drawer from '@material-ui/core/Drawer';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import DraggableList from './DraggableList';
import {arrayMove} from 'react-sortable-hoc';

class  NewPalette extends Component {

  constructor (props) {
    super();
    this.state = {
      open : true,
      colors : [{ color: "#0cffbc", name: "Teal light" }]
    }
  }

  handleDrawerClose = () => {
    this.setState( { open : false } )
  };

  handleDrawerOpen = () => {
    this.setState({ open: true })
  };

  handleAddColor = (newColor) => {
    this.setState({
      colors : [...this.state.colors, newColor],
      newColorName: ""
    });
    console.log('currentColor : '+ this.state.currentColor);
  }

  handleSubmitPalette = (paletteName) => {
    const newPalette = {
      paletteName: paletteName,
      id: paletteName.toLowerCase().replace(/ /g, "-"),
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
    const { open, colors } = this.state;
    const { classes, palettes } = this.props;


    return (
      <div className={classes.root}>
        <NewPaletteHeader 
          open={open} 
          classes={classes} 
          palettes={palettes} 
          handleDrawerOpen={this.handleDrawerOpen}
          handleSubmitPalette={this.handleSubmitPalette}
        />
        
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

          <ColorPicker handleAddColor={this.handleAddColor} colors={colors} />
          
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
