import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class ColorPicker extends Component {

    constructor(props) {
        super();
        this.state = {
            currentColor: "#0cffbc",
            newColorName: "",
        }
    }

    componentDidMount() {
        // Color name Rule
        ValidatorForm.addValidationRule('isColorNameUnique', value =>
            this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
        );
        // Color Rule
        ValidatorForm.addValidationRule('isColorUnique', () =>
            this.props.colors.every(({ color }) => color !== this.state.currentColor)
        );
    }

    handleChange = (evt) => {
        const { value, name } = evt.target;
        this.setState({
            [name]: value
        });
    }

    handleChangeComplete = (color) => {
        this.setState({
            currentColor: color.hex
        });
        // console.log(this.state.currentColor.hex);
    }

    handleColorSubmit = () => {
        const newColor = {
            name: this.state.newColorName,
            color: this.state.currentColor
        }
        this.props.handleAddColor(newColor);
    }

    render() {
        const { currentColor, newColorName } = this.state;

        return (
            <div>
                <ChromePicker
                color={currentColor}
                onChangeComplete={this.handleChangeComplete}
                />
                
                <ValidatorForm
                onSubmit={this.handleColorSubmit}
                onError={errors => console.log(errors)}
                ref='form'
                >
                <TextValidator
                label="Color name"
                onChange={this.handleChange}
                name="newColorName"
                value={newColorName}
                validators={['required', 'isColorNameUnique', 'isColorUnique']}
                errorMessages={['this field is required', 'Color name is not valid', 'Color itself must be unique']}
                />
                <Button type="submit" variant="contained" color="secondary" style={{ backgroundColor: currentColor.hex }}>
                Add color
                </Button>
                </ValidatorForm>
            </div>
        )
    }
}

export default ColorPicker