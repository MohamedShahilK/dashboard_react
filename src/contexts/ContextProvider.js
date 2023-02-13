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
                setScreenSize
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
