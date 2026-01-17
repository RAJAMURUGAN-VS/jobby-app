import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import ProtectedRoute from './routes/ProtectedRoute/ProtectedRoute'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Jobs from './pages/Jobs/Jobs'
import JobItemDetails from './pages/JobItemDetails/JobItemDetails'
import NotFound from './pages/NotFound/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
