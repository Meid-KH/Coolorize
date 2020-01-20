import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import { withStyles } from '@material-ui/core/styles';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css';
import styles from './styles/HeaderStyles';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            format: this.props.colorFormat,
            open_snackbar: false
        }
    }
    handleChange = (e) => {
        this.setState({ 
            format : e.target.value,
            open_snackbar: true
         })
        this.props.handleFormat(e.target.value);
    }
    handleSnackbar = () => {
        this.setState({ open_snackbar: false });
    }
    render() {
        const { level, changeLevel, showSlider, classes } = this.props;
        const { format, open_snackbar } = this.state;
        return (
            <header className={classes.navbar}>
                <div className={classes.logo}>
                    <Link to="/">ReactcolorApp</Link>
                </div>
                {showSlider && 
                <div className={classes.slider_container}>
                    <span>Level : {level}</span>
                    <div className={classes.slider_range}>
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onChange = {changeLevel}
                        />
                    </div>  
                </div>
                }
                <div className={classes.selectContainer}>
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value="">
                            <strong>Choose your color format</strong>
                        </MenuItem>
                        <MenuItem value="hex">
                            <strong>HEX</strong> &nbsp;- #ffffff
                        </MenuItem>
                        {/* <MenuItem value="id">
                        <strong>HEX <i>no hash</i> </strong> &nbsp; - ffffff
                        </MenuItem> */}
                        <MenuItem value="rgb">
                            <strong>RGB</strong> &nbsp;- rgb(255,255,255)
                        </MenuItem>
                        <MenuItem value="rgba">
                            <strong>RGBA</strong> &nbsp;- rgb(255,255,255,1.0)
                        </MenuItem>
                    </Select>
                </div>
                <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open_snackbar}
                autoHideDuration={3000}
                onClose={this.handleSnackbar}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Format successfully changed !</span>}
                action={[
                    <IconButton
                    key="close"
                    aria-label="close"
                    color="inherit"
                    onClick={this.handleSnackbar}
                    >
                    <CloseIcon />
                    </IconButton>,
                ]}
                />
            </header>
        )
    }
}
export default  withStyles(styles)(Header);
