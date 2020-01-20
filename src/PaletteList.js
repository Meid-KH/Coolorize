import React from 'react';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles";
const PaletteList = (props) => {
    const {classes, palettes} = props;
    const redirectToPalette = (id) => {
        // console.log("Redirect to : ",id);
        props.history.push(`/palette/${id}`);
    }
    return (
        <section className={classes.bg_wrapper}>
            <div className={classes.container}>
                <header className={classes.header}>
                    <h1>Color palettes list</h1>
                    <Link exact="true" to="/palette/new" className={classes.new_palette}> Create new Palette</Link>
                </header>
                <div className={classes.row}>
                    {palettes.map( palette =>
                        <MiniPalette key={palette.id} {...palette} handleRedirect={() => redirectToPalette(palette.id)} />
                    )}
                </div>
            </div>
        </section>
    );
}

export default withStyles(styles)(PaletteList);
