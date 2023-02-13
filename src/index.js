import React from 'react'
import './index.css'

// Only this file
// import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom/client'

import App from './App'

// Load from App.js
// This going to make sure to hook our react application to the root div

// import ReactDOM from 'react-dom'
// ReactDOM.render(<App />, document.getElementById('root'))

// import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    // <React.StrictMode>
        <App />
    // </React.StrictMode>
);

//  <React.StrictMode>
// ----------------------------------------------------------------
// StrictMode is a tool for highlighting potential problems in an application. Like Fragment , StrictMode does not 
// render any visible UI. It activates additional checks and warnings for its descendants.







