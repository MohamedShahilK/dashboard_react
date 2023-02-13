import React, { useEffect } from 'react'

import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'

import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import avatar from '../assets/avatar.jpg'
// using dot when we already inside the folder
import { Cart, Chat, Notification, UserProfile } from '.'

import { UseContextProvider } from '../contexts/ContextProvider'

// Custom Nav Button
const CustomNavButton = ({ title, customFunc, icon, buttonColor, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type='button' onClick={customFunc} style={{ color: buttonColor }} className='relative p-3 text-xl rounded-full hover:bg-light-gray'>
      {/* when parents with display property "inline-flex" coming together and also if there is enough space to occupy them together, then they occupy there (ie; in a single line) */}
      <span style={{ background: dotColor }} className="inline-flex absolute right-2 top-2 h-2 w-2 rounded-full" />
      {icon}
    </button>
  </TooltipComponent>
)

// Handle Click
// const handleClick = (value) => { }


// UseContextProvider

const Navbar = () => {
  const {
    activeSideBar, setActiveSideBar, isClicked, setIsClicked, handleClick, screenSize,
    setScreenSize,
  } = UseContextProvider()

  // UseContextProvider

  // UseEffect
  useEffect(() => {

    // finding window size intially when window loads and set it into screenSize variable
    // handleResize funtion declaration
    const handleResize = () => setScreenSize(window.innerWidth)

    // if window rezises, then we recalls "handleResize"
    // handleResize funtion calling
    window.addEventListener('resize', handleResize)

    // Also call handleResize initially, to get initail width
    // handleResize funtion calling intially (ie; at begining) and this call only happens once
    handleResize()

    // to clean up effects from previous renders , here it is "addEventListener"
    return () => { window.removeEventListener('resize', handleResize) }

  }, []) // If we put screenSize variable directly in the array, it is going to be called every time that the screen size changes, that would be very heavy for our application


  useEffect(() => {
    if (screenSize <= 900) {
      setActiveSideBar(false)
    } else {
      setActiveSideBar(true)
    }
  }, [screenSize])

  // When array elements changes its value then useEffect will trigger
  // When array is empty, then it is to be only called at start except for window.addEventListener like functions
  // UseEffect


  return (
    // Relative positioning keeps elements in the normal flow. That means that after you position them, their original location is still occupying space
    <div className='flex relative justify-between p-2 md:mx-6'>
      {/* Menu Button */}
      <CustomNavButton
        title="Menu"
        customFunc={() => {
          setActiveSideBar((prevActiveSideBar) => !prevActiveSideBar)
        }}
        buttonColor="blue" icon={<AiOutlineMenu />}
      />

      <div className='flex'>
        {/* Cart Button */}
        <CustomNavButton
          title="Cart"
          customFunc={() => handleClick('cart')}
          buttonColor="blue" icon={<FiShoppingCart />}
        />

        {/* Chat Button */}
        <CustomNavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick('chat')}
          buttonColor="blue" icon={<BsChatLeft />}
        />

        {/* Notification Button */}
        <CustomNavButton
          title="Notifications"
          dotColor="#03C9D7"
          customFunc={() => handleClick('notification')}
          buttonColor="blue" icon={<RiNotification3Line />}
        />

        {/* User Profile Button */}
        {/* Avatar, Name , DownArrow */}
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className='flex items-center gap-2 cursor-pointer hover:bg-light-gray rounded-lg'
            onClick={() => handleClick('userProfile')}
          >
            <img src={avatar} className="rounded-full w-8 h-8 " alt="No Avatar" />

            {/* No need use p tag here, span is a inline element */}
            <p>
              <span className='text-gray-400 text-14'>Hi </span> {' '}
              <span className='text-gray-400 text-14 font-bold ml-1'>Shahil</span>
            </p>

            <MdKeyboardArrowDown />

          </div>
        </TooltipComponent>
        {/* Avatar, Name , DownArrow */}

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}

      </div>
    </div>
  )
}

export default Navbar