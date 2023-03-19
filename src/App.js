import './App.css';

import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'


const App = () => {
  // const pageSize= 45
  const pageSize = 15
  const apiKey = process.env.REACT_APP_NEWS_API
  // const apiKey = process.env.REACT_APP_NEWS_API
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {/* <LoadingBar
            color='#f11946'
            progress={10}
          /> */}
        <Routes>
          <Route exact path='/' element={<News apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path='/entertainment' element={<News apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path='/business' element={<News apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
          {/* <Route exact path='/general' element={<News apiKey={apiKey}  key="general" pageSize={pageSize} country="in" category="general" />} /> */}
          <Route exact path='/health' element={<News apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route exact path='/science' element={<News apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route exact path='/sports' element={<News apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route exact path='/technology' element={<News apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )

}

export default App