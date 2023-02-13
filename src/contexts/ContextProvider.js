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
    const [activeSideBar, setActiveSideBar] = useState(true)

    return (
        <StateContext.Provider
            value={{
                // activeSideBar : activeSideBar
                activeSideBar,
                setActiveSideBar
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
