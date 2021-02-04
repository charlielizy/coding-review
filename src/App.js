import React from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import Homepage from './containers/Homepage/Homepage'
import './scss/styles.scss'
const App = () => {
  return (
    <Switch>
      <Route path='/' exact={true} component={Homepage} />
    </Switch>
  )
}
const EnhancedApp = withRouter(App);
const AppRouter = props => (
  <Router>
    <EnhancedApp {...props} />
  </Router>
)
export default AppRouter