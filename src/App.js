import './App.css'
import Login from './Components/auth/Login'
import Register from './Components/auth/Register'
import { Switch, BrowserRouter, Route } from "react-router-dom"
import SearchPage from './Components/ReourcePage/SearchPage'
import CoursePage from './Components/ReourcePage/CoursePage'
import Home from './Components/Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/search' component={SearchPage} />
        <Route path='/course/:courseId' component={CoursePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
