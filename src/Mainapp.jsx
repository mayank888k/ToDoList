import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import App2 from './App2'

const Mainapp = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/app2" component={App2}></Route>
            </Switch>
        </div>
    )
}

export default Mainapp
