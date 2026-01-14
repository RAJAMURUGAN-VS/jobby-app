import './App.css'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Jobs from './components/Jobs/Jobs'
import JobItemDetails from './components/JobItemDetails/JobItemDetails'
import NotFound from './components/NotFound/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/jobs" component={Jobs} />
    <Route exact path="/jobs/:id" component={JobItemDetails} />
    <Route path="/not-found" component={NotFound} />
  </Switch>
)

export default App
