// import logo from './logo.svg';
import './App.css';


import Navbar from './componenet/Navbar';
import News from './componenet/News';

import {   Routes, Route ,BrowserRouter as Router }  from "react-router-dom";

import React from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
const App =()=> {
   

  const [progress,setProgress]=useState(0)

 


 
    return (

      <>

        <Router>
          <Navbar></Navbar>
            <LoadingBar
        color='#f11946'
        progress={progress}
        height={4}
        
        />
          <Routes>
           

            
       

              <Route exact index element={<News progress={setProgress}  key="business"  pageSize={6} countre="in" category="business" ></News>} />
              <Route exact  path="/technology" element={<News progress={setProgress}   key="technology" pageSize={6} countre="in" category="technology" ></News>} />
              <Route exact path="/sports" element={<News progress={setProgress}   key="sports" pageSize={6} countre="in" category="sports" ></News>} />
              <Route exact path="/science" element={<News progress={setProgress}  key="science"  pageSize={6} countre="in" category="science" ></News>} />
              <Route exact path="/health" element={<News progress={setProgress}  key="health"  pageSize={6} countre="in" category="health" ></News>} />
              <Route exact path="/general" element={<News progress={setProgress}  key="general"  pageSize={6} countre="in" category="general" ></News>} />
              <Route exact path="/entertainment" element={<News progress={setProgress}  key="entertainment"  pageSize={6} countre="in" category="entertainment" ></News>} />
              <Route exact path="/business" element={<News progress={setProgress}  key="business" pageSize={6} countre="in" category="business" ></News>}/>

          </Routes> 
        </Router>


      </>
    )
  
}

export default App

