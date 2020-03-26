import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopBar from './Components/TopBar.js';
import Home from './Pages/Home.js';
import UnrealPage from './Pages/UEPage.js';
import WebDevPage from './Pages/WebDevPage.js';
import Unity from './Pages/UnityPage.js';
import CSharpPage from './Pages/C#Page.js';
import CppPage from './Pages/CppPage.js';
import './App.css';

function App()
{
    return (
      <Router>
        <div>
          <TopBar />

          <Route exact path="/" component={Home} />
          <Route exact path="/Unreal" component={UnrealPage} />
          <Route exact path="/WebDevelopment" component={WebDevPage} />
          <Route exact path="/CSharp" component={CSharpPage} />
          <Route exact path="/Unity" component={Unity} />
          <Route exact path="/CPlusPlus" component={CppPage} />

        </div>
      </Router>
    );
  
}

export default App;
