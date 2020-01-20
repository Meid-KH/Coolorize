import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from "./styles/ColorBoxStyles";
import { withStyles } from '@material-ui/core/styles';
import CopyToClipbaord from 'react-copy-to-clipboard';

class ColorBox extends Component {

    constructor(props) {
        super(props);
        this.state = { copied : false };
    }
    handleCopy = () => {
        this.setState( { copied : true }, () => setTimeout( () => this.setState({ copied:false }), 1500 ) );
    }
    render () {
        const { name, background, paletteId, colorId, showMoreLink, classes} = this.props;
        const { copied } = this.state;

        return (
            <CopyToClipbaord text={background} onCopy={this.handleCopy}>
                <div style={{ background }} className={`${classes.colorBox} ${ copied && classes.show }`}>
                    <div className={`${classes.copyOverlay} copy_overlay`} style={{background}} />
                    <div className={`${classes.copyMsg} copy_msg`}>
                        <h1>Copied</h1>
                        <p>{background}</p>
                    </div>
                    <span className="colorbox_name">{name}</span>
                    <span className="colorbox_copy"> Copy </span>
                    {showMoreLink &&
                        <Link exact="true" to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
                            <span className="colorbox_more"> More </span>
                        </Link>
                    }
                </div>
            </CopyToClipbaord>
        );
    }
}

export default  withStyles(styles)(ColorBox);
