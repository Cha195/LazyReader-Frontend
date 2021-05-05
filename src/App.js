import './App.css'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/auth/Login'
import Register from './Components/auth/Register'
import SearchPage from './Components/ReourcePage/SearchPage'
import CoursePage from './Components/ReourcePage/CoursePage'
import Forum from './Components/ReourcePage/Forum'
import ThreadPage from './Components/ReourcePage/ThreadPage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/search' component={SearchPage} />
        <Route exact path='/course/:courseId' component={CoursePage} />
        <Route exact path='/course/:courseId/forum' component={Forum} />
        <Route path='/course/:courseId/forum/:threadId' component={ThreadPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
