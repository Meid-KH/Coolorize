import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColor from './SingleColor';
import NewPalette from './NewPalette';
import seedColors from './seedColors';
import {generatePalette} from './colorHelpers';
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/AppStyles";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      palettes : seedColors
    }
  }
  findPalette = (id) => {
    return this.state.palettes.find( function(palette)  {
      return palette.id === id;
    } );
  }
  registerPalette = (palette) => {
    console.log('register palette', palette);
    this.setState({ palettes: [...this.state.palettes, palette] });
  }
  render() {
    return (
      <div className={this.props.classes.colorPaletteWrapper}>
        <BrowserRouter>
          <Switch>
  
            <Route 
              extact 
              path='/palette/new' 
              render={ (routeProps) => 
                <NewPalette registerPalette={this.registerPalette} palettes={this.state.palettes} {...routeProps}  /> 
              } 
            />
  
            <Route 
              extact 
              path='/palette/:paletteId/:colorId' 
              render={ (routeProps) => 
                <SingleColor 
                colorId={ routeProps.match.params.colorId }
                palette={ generatePalette( this.findPalette(routeProps.match.params.paletteId) )} 
                {...routeProps} /> 
              } 
            />
            
            <Route 
              extact 
              path="/palette/:id" 
              render={ routeProps => 
            (<Palette  palette={ generatePalette( this.findPalette(routeProps.match.params.id) ) } />) } />
  
            <Route extact path='/' render={ (routeProps) => <PaletteList palettes={this.state.palettes} {...routeProps} /> } />
  
          </Switch>
        </BrowserRouter>
      </div>
        
    );
  }
}

export default  withStyles(styles)(App);
