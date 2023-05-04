import React, { useState } from 'react';
import styled from 'styled-components';

const ColorPickerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ColorOption = styled.div`
  width: 35px;
  height: 35px;
  margin: 5px;
  border-radius: 50%;
  cursor: pointer;
`;

const ColorPicker = ({ colors, selectedColor, onColorChange }) => {
  const [selected, setSelected] = useState(selectedColor);

  const handleColorChange = (color) => {
    setSelected(color);
    onColorChange(color);
  };

  return (
    <ColorPickerContainer>
      {colors.map((color) => (
        <ColorOption
          key={color}
          style={{ backgroundColor: color, border: selected === color ? '2px solid black' : '' }}
          onClick={() => handleColorChange(color)}
        />
      ))}
    </ColorPickerContainer>
  );
};

export default ColorPicker;