import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import Frame from './Frame/Frame'

const Hearder = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/frame" component={Frame}/>
        </Switch>
        </Router>
  )
}

export default Hearder;