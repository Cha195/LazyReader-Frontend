import './App.css'
import Auth from './Components/auth'
import { Switch, BrowserRouter, Route } from "react-router-dom";
import SearchPage from './Components/ReourcePage/SearchPage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/auth'>
          <Auth />
        </Route>
        <Route path='/search'>
          <SearchPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
