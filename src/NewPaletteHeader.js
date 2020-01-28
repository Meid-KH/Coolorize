import React, { Component } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


class NewPaletteHeader extends Component {
    constructor(props) {
        super();
        this.state = {
            open: true,
            paletteName : "",
        }
    }

    componentDidMount() {
        // Palette name Rule
        ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
            this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
        );
    }

    handleChange = (evt) => {
        const { value, name } = evt.target;
        this.setState({
            [name]: value
        });
    }


    render() {
        const { paletteName } = this.state;
        const { open, classes } = this.props;

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
            <Toolbar>
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
            
            <ValidatorForm
            onSubmit={() => this.props.handleSubmitPalette(paletteName)}
            onError={errors => console.log(errors)}
            ref='form'
            >
            <TextValidator
                label="Palette name"
                onChange={this.handleChange}
                name="paletteName"
                value={paletteName}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={['this field is required', 'Palette name must be unique also !']}
            />
            <Button type="submit" variant="contained" color="secondary">
            Add palette name
            </Button>
            </ValidatorForm>
            
            </Toolbar>
            </AppBar>
            </div>
        )
    }
}

export default NewPaletteHeader;