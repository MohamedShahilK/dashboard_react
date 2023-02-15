import React from 'react'

import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

// import { themeColors } from '../assets/dummy'
import { themeColors } from '../assets/data/theme_colors_data'

import { UseContextProvider } from '../contexts/ContextProvider'

const ThemeSettings = () => {

  const { setColor, setMode, currentMode, currentColor, setThemeSettings } = UseContextProvider()

  return (
    // <div>ThemeSettings</div>

    // To get half transparent barrier for whole page (w-screen = 100 vw) and div fixed or start from right side
    // z-50 or nav-item 
    <div className='w-screen bg-half-transparent fixed top-0 right-0 nav-item'>

      {/* Container on Right side with width 300px (we have w-400 in tailwaind but don't have w-300) */}
      <div style={{ width: "300px" }} className=' float-right h-screen bg-white dark:[#484B52] dark:text-gray-200' >

        {/* Top heading and close Button */}
        <div className='flex justify-between items-center p-4 ml-4'>

          <p className='font-semibold text-xl'>Settings</p>

          {/* Cancel Button */}

          <button type='button'
            onClick={() => setThemeSettings(false)}
            style={{ color: 'rgb(153,171,180)', borderRadius: '50%' }}
            className='text-2xl hover:bg-light-gray'
          >
            <MdOutlineCancel />
          </button>

          {/* Cancel Button */}

        </div>
        {/* Top heading and close Button */}

        {/* Theme Options */}
        <div className='flex-col border-t-1 border-color p-4 ml-4'>

          <p className='font-semibold text-lg'>Theme Options</p>

          {/* Light Theme Radio Button */}
          <div className='mt-4'>

            <input
              type="radio"
              id='light'
              name='theme'
              value="Light"
              className='cursor-pointer'

              onChange={setMode}
              checked={currentMode === 'Light'}
            />

            <label htmlFor="light" className='ml-2 text-base cursor-pointer'>Light</label>

          </div>
          {/* Light Theme Radio Button */}


          {/* Dark Theme Radio Button */}
          <div className='mt-4'>

            <input
              type="radio"
              id='dark'
              name='theme'
              value="Dark"
              className='cursor-pointer'

              onChange={setMode}
              checked={currentMode === 'Dark'}
            />

            <label htmlFor="dark" className='ml-2 text-base cursor-pointer'>Dark</label>

          </div>
          {/* Dark Theme Radio Button */}

        </div>
        {/* Theme Options */}

        {/* Theme Colors */}
        <div className='flex-col border-t-1 border-color p-4 ml-4'>

          <p className='font-semibold text-lg'>Theme Colors</p>

          <div className='flex gap-3' style={{ width: "fit-content" }}>

            {
              themeColors.map((item, index) => (
                <TooltipComponent key={index} content={item.name} position="TopCenter">

                  <div className='flex gap-3 relative items-center mt-2 cursor-pointer' >

                    <button
                      type='button'

                      onClick={() => setColor(item.color)}

                      className='h-8 w-8 rounded-full cursor-pointer'
                      style={{ backgroundColor: item.color }}
                    >
                      <BsCheck
                        className={`ml-1 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`}
                      />
                      
                    </button>

                  </div>

                </TooltipComponent>
              ))
            }

          </div>

        </div>
        {/* Theme Colors */}

      </div>
      {/* Container on Right side with width 400px */}

    </div>
  )
}

export default ThemeSettings 