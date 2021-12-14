import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from './pages/Home';


function App() {
  
  return (
    

          <Routes>
            <Route path="/" element={<Home />}/>
            {/* <Route path="/attractions" component={Attractions} />
            <Route path="/visit" component={Visit} />
            <Route path="/about" component={About} /> */}
          </Routes>
        
       
  )
}

export default App;
