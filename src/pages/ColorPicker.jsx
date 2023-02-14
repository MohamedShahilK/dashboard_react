import React from 'react'

import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'

import { Header } from '../components'

const changeColor = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex
}

const ColorPicker = () => {
  return (
    // <div>ColorPicker</div>

    <div className='m-2 md:m-10 mt-24 p-2 md:pd-10 bg-white rounded-3xl'>

      <Header category="App" title="ColorPicker" />

      <div className='text-center'>

        {/* id='preview' is to get pen preview for color checking */}
        <div id='preview'> </div>
        {/* id='preview' is to get pen preview for color checking */}

        <div className='flex justify-center items-center gap-20 flex-wrap'>

          {/* Inline Pallette */}
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallette</p>
            <ColorPickerComponent
              id='inline-pallette'
              mode='Palette'
              modeSwitcher={false} //it set to false, becoz we want to mode by ourselves (mode='palette')
              inline  //set to true
              showButtons={false}
              change={changeColor}
            />
          </div>
          {/* Inline Pallette */}

          {/* Inline Picker */}
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent
              id='inline-picker'
              mode='Picker'
              modeSwitcher={false} //it set to false, becoz we want to mode by ourselves (mode='palette')
              inline  //set to true
              showButtons={false}
              change={changeColor}
            />

          </div>
          {/* Inline Picker */}

        </div>

      </div>

    </div>


  )
}

export default ColorPicker