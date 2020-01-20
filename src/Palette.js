import React, {Component} from 'react';
import ColorBox from './ColorBox';
import Header from './Header';
import Footer from './Footer';
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/PaletteStyles";


class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level : 600,
            format: "hex"
         }
    }
    handleSliderChange = (level) => {
        this.setState( { level } );
    }
    handleFormat = (val) => {
        this.setState( { format : val } );
    }
    render() {
        const { colors, paletteName, emoji, id } = this.props.palette;
        const {classes} = this.props;
        const { level, format } = this.state;
        const colorBox = colors[level].map( color =>  <ColorBox key={color.id} background={color[format]} name={color.name} paletteId={id} colorId={color.id} showMoreLink /> )
        // console.log(props.colors)
        return (
            <div className={classes.palette_wrapper}>
               <Header level={level} changeLevel={this.handleSliderChange} colorFormat={this.state.format} handleFormat={this.handleFormat} showSlider/>

                <div className={classes.palette}>
                    {colorBox}
                </div>

                <Footer paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default withStyles(styles)(Palette);
