import './App.css';
import { Route, Switch } from "react-router-dom"

function App() {
  
  return (
    <div>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/attractions" component={Attractions} />
          <Route path="/visit" component={Visit} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    </div>
  )
}

export default App;
