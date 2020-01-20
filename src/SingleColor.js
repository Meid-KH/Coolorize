import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 
import Header from './Header';
import Footer from './Footer';
import ColorBox from './ColorBox';
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/PaletteStyles";

class SingleColor extends Component {
    constructor (props) {
        super(props);
        this.state = {
            format: "hex"
        }
    }
    
    retrieveShades = (palette, filterColor) => {
        let shades = [];
        let allColors =  palette.colors;
        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter( color => color.id === filterColor )
            );
        }
        return shades.slice(1);
    }

    handleFormat = (val) => {
        this.setState( { format : val } );
    }

    render() {
        const {format} = this.state;
        const {palette, colorId, classes}= this.props;
        const _shades = this.retrieveShades(palette, colorId);
        // console.log(this._shades);
    
        const singleColorBox = _shades.map( color => <ColorBox key={color.name} background={color[format]} name={color.name}  showMoreLink={false} /> );

        return (
            <div className={classes.palette_wrapper}>
                <Header colorFormat={this.state.format} handleFormat={this.handleFormat} showSlider={false} />

                <div className={`${classes.palette} _single`}>
                    {singleColorBox}
                    <div className={`${classes.colorBox} go_back`}>
                        <Link to={`/palette/${palette.id}`} className="back_button" > Go back </Link>
                    </div> 
                </div>
                
                <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
            </div>
        );
    }
}

export default  withStyles(styles)(SingleColor);
