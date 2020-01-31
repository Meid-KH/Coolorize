import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import {SortableContainer} from 'react-sortable-hoc';

const DraggableList = SortableContainer(({colors, handleDelete}) => {
    // const {colors, handleDelete} = props;
    return (
        <div>
            {colors.map( (color, i) => 
            <DraggableColorBox key={color.name} index={i} backgroundColor={color.color} colorName={color.name} handleDelete={() => handleDelete(color.name)} /> ) }
        </div>
    );
})

export default DraggableList;
