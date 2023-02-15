import React from "react";
import "./App.css";
import Sidebar from './components/SideBar/Sidebar'
import Widgets from "./components/Widgets/Widgets";
import ProfileHeader from './components/ProfileHeader/ProfileHeader';
import About from './components/About/About';
import Experience from './components/Experience/Experience'
import Work from './components/Work/Work'
import "./Center.css"
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Summary from './components/Summary/Summary';
import Feed from './components/Feed/Feed';
import  Contact from './components/Contact/Contact';


function App() {
  return (
    <React.Fragment>
      <div className="app">
        <BrowserRouter>
        <Sidebar />
        <div className="center-container">
          <ProfileHeader /> 
      <Routes>
        <Route exact path="/" element={<Feed />}></Route>
        <Route path="/Summary" element={<Summary />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Experience" element={<Experience />}></Route>
        <Route path="/Work" element={<Work />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>

      </Routes> 
        </div>
        
        <Widgets />  
      </BrowserRouter> 
      
      </div>
    </React.Fragment>
  );
}


export default App