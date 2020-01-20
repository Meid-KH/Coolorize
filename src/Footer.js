import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/FooterStyles";


const Footer = (props) => {
    const {paletteName, emoji, classes} = props;
    return (
        <footer className={classes.footer}>
            {paletteName} <span className={classes.footerEmojis}>{emoji}</span>
        </footer>
    );
}

export default withStyles(styles)(Footer);
