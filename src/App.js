import './App.css'
import Auth from './Components/auth'
import { Switch, BrowserRouter, Route } from "react-router-dom";
import SearchPage from './Components/ReourcePage/SearchPage'
import CoursePage from './Components/ReourcePage/CoursePage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/search' component={SearchPage} />
        <Route path='/course/:courseId' component={CoursePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
