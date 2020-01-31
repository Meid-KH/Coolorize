import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

class ModalForm extends Component {

    constructor (props) {
        super(props);
        this.state = {
            open: true,
            paletteName: "",
            currentStep: 1
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
    
    nextStep = () => {
        this.setState({
            currentStep: 2
        });
    }

    render() {
        const { open, paletteName, currentStep } = this.state;
        const { HideModal } = this.props;
        return (
            <Dialog open={open} onClose={ HideModal } aria-labelledby="form-dialog-title">
                {/* Palette name Step */}
                {currentStep === 1 && (
                <ValidatorForm
                        onSubmit={this.nextStep}
                        onError={errors => console.log(errors)}
                        ref='form'
                    >
                        <DialogTitle id="form-dialog-title">Saving your palette</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                In order to save and add a palette, choose a name for it. also make sure it is unique.
                            </DialogContentText>
                            <TextValidator
                                label="Palette name"
                                margin="normal"
                                fullWidth
                                onChange={this.handleChange}
                                name="paletteName"
                                value={paletteName}
                                validators={['required', 'isPaletteNameUnique']}
                                errorMessages={['this field is required', 'Palette name must be unique also !']}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={ HideModal } variant="outlined" color="primary">
                                Cancel
                            </Button>
                            <Button type="submit" variant="contained" color="primary">
                                Save & continue
                            </Button>
                        </DialogActions>
                    </ValidatorForm>
                    )}

                {/* Emoji Step */}
                {currentStep === 2 && (
                    <div>
                        <DialogTitle id="form-dialog-title">Saving your palette</DialogTitle>
                        {/* <DialogContent> */}
                            <Picker
                                set='messenger'
                                title="Pick your emoji…"
                                emoji="point_up"
                                darkMode={false}
                                onSelect={(emoji) => this.props.handleSubmitPalette(paletteName, emoji.native)}
                            />
                        {/* </DialogContent> */}
                    </div>
                )}
                
            </Dialog>
        );
    }

}

export default ModalForm;