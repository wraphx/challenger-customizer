import React from 'react';
import { HexColorPicker } from 'react-colorful';
import { proxy, useSnapshot } from 'valtio';

export const state = proxy({
    base: { BaseMtl: "#FFFFFF" }, // Initialize base color to white
});

const ColorPicker = () => {
    const snap = useSnapshot(state);

    const handleColorChange = (color) => {
        state.base.BaseMtl = color; // Update the base color in the state
    };

    const resetColor = () => {
        state.base.BaseMtl = "#FFFFFF"; // Reset the base color to white
    };

    let color = state.base.BaseMtl;

    return (
        <div style={{ padding: '8px' }}>
            <HexColorPicker
            
                color={snap.base.BaseMtl}
                onChange={handleColorChange}
            />
            <div className='current-color'>
                Current color is {color}
            </div>
            <button className='button' onClick={resetColor}>Reset Original Color</button>
        </div>
    );
};

export default ColorPicker;
