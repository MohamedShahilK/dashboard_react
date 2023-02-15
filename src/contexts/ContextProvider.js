import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

const InitialState = {
    chat: false,
    cart: false,
    notification: false,
    userProfile: false,
}

// Here we provided values for the underlying children
export const ContextProvider = ({ children }) => {
    // SideBar
    const [activeSideBar, setActiveSideBar] = useState(true)

    // isClicked on NavBar Items and passing "initalState" object or map
    const [isClicked, setIsClicked] = useState(InitialState)

    // handle click of NavBar Items
    // here spreading initialState and change only one item with key is clickedSection
    const handleClick = (clickedSection) => {
        setIsClicked(
            {
                ...InitialState,
                [clickedSection]: true,
            }
        )
    }

    // "handle SideBar based on screensize" and set as undefined (becoz, we don't know the current screensize)
    const [screenSize, setScreenSize] = useState(undefined)

    // For Set color for Theme Settings
    const [currentColor, setCurrentColor] = useState('#03C9D7')  //03C9D7 is second color (green theme) out of six color

    // For Set mode for Theme Settings
    const [currentMode, setCurrentMode] = useState('Light')

    //  setMode and setColor functions to set current mode & current color respectively  and save it local storage 
    // (in order to save that data, so it will not overwrite by intial data)

    const setMode = (e) => {
        setCurrentMode(e.target.value)

        // save it in local storage
        localStorage.setItem('themeMode', e.target.value)

        // Close ThemeSettings after selection
        setThemeSettings(false)
    }

    const setColor = (mode) => {
        setCurrentColor(mode)

        // save it in local storage
        localStorage.setItem('colorMode', mode)

        // Close ThemeSettings after selection
        setThemeSettings(false)
    }

    // useState for ThemeSettings
    const [themeSettings, setThemeSettings] = useState(false)


    return (
        <StateContext.Provider
            value={{
                // activeSideBar : activeSideBar
                activeSideBar,
                setActiveSideBar,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                // 
                // setCurrentColor,
                // setCurrentMode,
                currentColor,
                setColor,
                currentMode,
                setMode,
                themeSettings,
                setThemeSettings
            }}
        >
            {children}
        </StateContext.Provider>
    );
}

// It is For Using the Provided Values within the children
// export const UseContextProvider = () => {
//     return useContext(StateContext)
// }

export const UseContextProvider = () => useContext(StateContext)
