import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalForm from './ModalForm';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';


class NewPaletteHeader extends Component {
    constructor(props) {
        super();
        this.state = {
            open: true,
        }
    }

    handleChange = (evt) => {
        const { value, name } = evt.target;
        this.setState({
            [name]: value
        });
    }


    render() {
        const { open, classes, palettes } = this.props;

        return (
            <div>
            <CssBaseline />
            <AppBar
            color="default"
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
            >
            <Toolbar className={classes.tool_bar}>
                <div className="_left">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.props.handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />    
                </IconButton>
                <Typography variant="h6" noWrap>
                    Persistent drawer   
                </Typography>
                </div>
                <div className="_right">
                    <Link to="/">
                        <Button variant="contained" color="primary">
                            Go back
                        </Button>
                    </Link>
                    <ModalForm palettes={palettes} handleSubmitPalette={this.props.handleSubmitPalette} />
                </div>
            
            </Toolbar>
            </AppBar>
            </div>
        )
    }
}

export default NewPaletteHeader;