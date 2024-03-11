import React from 'react';
import { SliderPicker } from 'react-color';
import { proxy, useSnapshot } from 'valtio';

export const state = proxy({
    base: { BaseMtl: "#ffffff" }, // Initialize BaseMtl color
});

const ColorPicker = () => {
    const snap = useSnapshot(state);

    const resetColor = () => {
        state.base.BaseMtl = '#ffffff'; // Reset the BaseMtl color
    };

    return (
        <div>
            
            <div className='current-color'>
                <span>Change Color:    </span>
                
                <input 
                    type="color" 
                    id="colorpicker" 
                    value={snap.base.BaseMtl} // Use the current color
                    onChange={(e) => (state.base.BaseMtl = e.target.value)} // Update the color on change
                />
            </div>
            <div className='color-hex'>
                    {snap.base.BaseMtl}
                </div>
            <button className='button' style={{marginLeft: '10px'}} onClick={resetColor}>Reset Original Color</button>
        </div>
    );
};

export default ColorPicker;
