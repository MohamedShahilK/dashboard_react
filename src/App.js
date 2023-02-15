import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { UseContextProvider } from './contexts/ContextProvider'

// import {Navbar,Footer,Sidebar,ThemeSettings} from './components/index'
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Line,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor
} from "./pages";

import "./App.css";

const App = () => {
  const { activeSideBar, themeSettings, setThemeSettings, currentColor, currentMode } = UseContextProvider()
  // const activeSideBar = true;
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        {/* Relative positioning keeps elements in the normal flow. That means that after you position them, their original location is still occupying space */}
        <div className="flex relative dark:bg-main-dark-bg">
          {/*  */}
          {/* Settings button */}
          <div className="fixed right-4 bottom-4 z-50">
            <TooltipComponent
              content="Settings"
              position="Top"
              style={{ zIndex: 1000 }}
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                className="text-4xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                style={{
                  // background: "blue",

                  background: currentColor,

                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/* Settings button */}

          {/*  */}
          {/* SideBar */}  {/* z-50 or nav-item */}
          {activeSideBar ? (
            <div className="sidebar w-72 fixed bg-white dark:bg-secondary-dark-bg nav-item">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          {/* SideBar */}

          {/*  */}

          {/* ---------------------------------------------------------------------------------------------- */}

          {/* Main Section or Body Section excluding sidebar and settings button*/}

          <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full   
                      ${activeSideBar ? "md:ml-72" : "flex-2"}`}>

            {/* Navigation Bar */}

            {/* in case of fixed, it occupy here all remaining width space (becoz, here w-full is given), even there is a flex child remains*/}
            {/* in case of static (normal flow), even there is a "w-full", it can only occupy the remaining 100% width after occupied by the other flex child*/}
            <div className="navbar fixed md:static bg-main-bg dark:bg-main-dark-bg w-full">
              {/* <div className="navbar fixed md:static bg-main-bg dark:bg-main-dark-bg"> */}
              {/* NavBar */}
              <Navbar />
            </div>

            {/* Theme Settings */}

            {themeSettings && <ThemeSettings />}

            {/* Theme Settings */}

            {/*  */}
            {/*  */}
            {/* Routes */}

            <div>
              <Routes>
                {/*  */}
                {/* Dashboard */}

                {/* <Route path="/" element="Ecommerce"/> */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />

              </Routes>
            </div>
            {/* Routes */}

          </div>
          {/* Main Section or Body Section excluding sidebar and settings button*/}

          {/* ---------------------------------------------------------------------------------------------- */}

        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
