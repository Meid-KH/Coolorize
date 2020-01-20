import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColor from './SingleColor';
import NewPalette from './NewPalette';
import seedColors from './seedColors';
import {generatePalette} from './colorHelpers';
// import './App.css';
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/AppStyles";

function App(props) {
  // console.log( generatePalette(seedColors[2]) );
  const findPalette = (id) => {
    return seedColors.find( function(palette)  {
      return palette.id === id;
    } );
  }
  return (
    <div className={props.classes.colorPaletteWrapper}>
      <BrowserRouter>
        <Switch>

          <Route 
            extact 
            path='/palette/new' 
            render={ () => 
              <NewPalette  /> 
            } 
          />

          <Route 
            extact 
            path='/palette/:paletteId/:colorId' 
            render={ (routeProps) => 
              <SingleColor 
              colorId={ routeProps.match.params.colorId }
              palette={ generatePalette( findPalette(routeProps.match.params.paletteId) )} 
              {...routeProps} /> 
            } 
          />
          
          <Route 
            extact 
            path="/palette/:id" 
            render={ routeProps => 
          (<Palette  palette={ generatePalette( findPalette(routeProps.match.params.id) ) } />) } />

          <Route extact path='/' render={ (routeProps) => <PaletteList palettes={seedColors} {...routeProps} /> } />

        </Switch>
      </BrowserRouter>
    </div>
      
  );
}

export default  withStyles(styles)(App);
