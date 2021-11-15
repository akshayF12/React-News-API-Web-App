import './App.css';

import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  // const pageSize = 5;
  // const apiKey = process.env.REACT_APP_NEWS_API
  // const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar/> 
        {/* <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      /> */}
        <Routes>
          {/* <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route>  */}
        


          <Route  path="/news-money" element={<News key="sports" pageSize={4} country={"in"} category={"sports"}/>} />
          <Route  path="/home" element={<News key="sports" pageSize={4} country={"in"} category={"sports"}/>} />
          <Route  path="/" element={<News key="sports" pageSize={4} country={"in"} category={"sports"}/>} />
          <Route  path="sports/*" element={<News key="sports" pageSize={4} country={"in"} category={"sports"}/>} />
          <Route path="general/*" element={<News  key="general" pageSize={4} country={"in"} category={"general"}/>} />
          <Route path="health/*" element={<News key="health"  pageSize={4} country={"in"} category={"health"}/>} />
          <Route path="entertainment/*" element={<News key="entertainment" pageSize={4} country={"in"} category={"entertainment"}/>} />
          <Route path="science/*" element={<News key="science" pageSize={4} country={"in"} category={"science"}/>} />
          <Route path="technology/*" element={<News key="technology" pageSize={4} country={"in"} category={"technology"}/>} />
          <Route path="business/*" element={<News key="business" pageSize={4} country={"in"} category={"business"}/>} />
        
        </Routes>
        </Router>
      </div>
    )
 
}

export default App;