import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class ModalForm extends Component {

    constructor (props) {
        super(props);
        this.state = {
            open: false,
            paletteName: ""
        }
    }

    componentDidMount() {
        // Palette name Rule
        ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
            this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
        );
    }

    handleClickOpen = () => {
        this.setState({ open : true });
    };

    handleClose = () => {
        this.setState({ open : false });

    };

    handleChange = (evt) => {
        const { value, name } = evt.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        const { open, paletteName } = this.state;
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Open form dialog
                </Button>
                <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send updates
                            occasionally.
                        </DialogContentText>
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
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

}

export default ModalForm;