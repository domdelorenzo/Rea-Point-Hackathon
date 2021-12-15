import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from './pages/Home';
import RideReview from './pages/RideReview';


function App() {
  
  return (
    

          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/rides/:id" element={<RideReview />}/>
            {/* <Route path="/visit" component={Visit} />
            <Route path="/about" component={About} /> */}
          </Routes>
        
       
  )
}

export default App;
