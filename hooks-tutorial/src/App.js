import React from 'react';
import ColorBox from './contexts/ColorBox';
import {ColorProvider} from './contexts/color';
import SelectColors from './components/selectColors';

const App = () => {
  return (
  <ColorProvider>
    <div>
      <SelectColors />
      <ColorBox />
    </div>
  </ColorProvider>
  );
};

export default App;
