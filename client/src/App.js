import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Physical from "./components/Physical/Physical";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Physical} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
