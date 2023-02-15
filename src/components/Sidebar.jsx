import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'

import { links } from '../assets/data/sidebar_data'

import { UseContextProvider } from '../contexts/ContextProvider'

const Sidebar = () => {
  const { activeSideBar, setActiveSideBar, screenSize, currentColor } = UseContextProvider()
  // const activeSideBar = true;

  // classNames for the items of the Main Headings based on isActive boolean provided by the NavLink
  // const activeLink = className='flex items-center gap-5 pl-4 pt-3 pb-2.5 m-2 rounded-lg text-white text-base ';
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 m-2 rounded-lg text-base text-white';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 m-2 rounded-lg text-base text-gray-700 hover:bg-light-gray dark:text-gray-200 dark:hover:text-black';

  // Only works for screensize <= 900. So SideBar in largescreen( >900 ) is always visible
  const handleCloseSideBar = () => {
    if (activeSideBar && screenSize <= 900) {
      setActiveSideBar(false)
    }
  }

  return (

    <div className='ml-3 pb-10 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto'>
      {
        // activeSideBar && (
        (
          <>

            {/* Logo, Name, Cancel Button */}
            <div className='flex justify-between items-center'>
              {/* logo and name */}
              <Link to="/"
                // onClick={() => setActiveSideBar(false)}
                onClick={handleCloseSideBar}
                className="flex items-center gap-3 ml-3 mt-4 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white"
              >
                <SiShopware /><span>PepperTrain</span>
              </Link>
              {/* logo and name */}

              {/* cancel button */}
              <TooltipComponent content="Menu" >
                <button type='button' onClick={() => {
                  // setActiveSideBar(false)
                  setActiveSideBar((prevActiveSideBar) => !prevActiveSideBar)
                }} className="block md:hidden mt-4 p-3 rounded-full text-xl ">
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>
              {/* cancel button */}
            </div>
            {/* Logo, Name, Cancel Button */}

            {/* Other Items in SideBar */}
            <div className='mt-10'>
              {
                links.map((item) => (
                  <div>
                    {/* Main Headings */}
                    <p className='m-3 mt-4 uppercase text-gray-400'>
                      {item.title}
                    </p>
                    {/* Main Headings */}

                    {/* List links of each Main Heading */}
                    {
                      item.links.map((eachLink) => (
                        <NavLink
                          to={`/${eachLink.name}`}
                          key={eachLink.name}

                          //Not working
                          // style={({ isActive }) => isActive ? ({ backgroundColor: { currentColor } }) : ({ backgroundColor: '' })} 

                          style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : '' })}

                          onClick={handleCloseSideBar}

                          // isActive boolean is provided by NavLink
                          className={({ isActive }) => isActive ? activeLink : normalLink}
                        >
                          {eachLink.icon}
                          <span className='capitalize'>{eachLink.name}</span>

                        </NavLink>
                      ))
                    }
                    {/* List links of each Main Heading */}
                  </div>
                ))
              }
            </div>
            {/* Other Items in SideBar */}
          </>
        )
      }
    </div>
  )
}

export default Sidebar