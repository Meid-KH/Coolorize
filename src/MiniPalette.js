import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/MiniPaletteStyles";

const MiniPalette = (props) => {
    const {classes, paletteName, emoji, colors} = props;
    
    return (
        <div className={classes.wrapper} onClick={ props.handleRedirect } >
            <div className={classes.inner}>
                { colors.map(color => <div key={color.name} style={{background: color.color}}></div> ) }
            </div>
            <h2 className={classes.title}> {paletteName} <span> {emoji} </span> </h2>
        </div>
    );
}

export default withStyles(styles)(MiniPalette);
