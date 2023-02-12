import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

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
  //   return <h1 className="underline text-3xl">App</h1>;
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4">
            {/*  */}
            {/* Settings button */}
            <TooltipComponent
              content="Settings"
              position="Top"
              style={{ zIndex: 1000 }}
            >
              <button
                type="button"
                className="text-4xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                style={{
                  background: "blue",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/*  */}
          {/* SideBar */}
          {activeMenu ? (
            <div className="sidebar w-72 fixed bg-white dark:bg-secondary-dark-bg ">
              {/* SideBar */}
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              {/* No SideBar */}
              <Sidebar />
            </div>
          )}
          {/*  */}
          {/* Navigation Bar */}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"
              }`}
          >
            <div className="navbar fixed md:static bg-main-bg dark:bg-main-dark-bg w-full">
              {/* NavBar */}
              <Navbar />
            </div>
          </div>
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
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calender" element={<Calendar />} />
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
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
