import React from 'react'
import { Menu } from '../Menu';
import { Hello } from '../Hello';
import { Goodbye } from '../Goodbye';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

export default class ViewComponent extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <Menu />
                    <div style={{marginTop:"100px"}}>
                    <Switch>
                        <Route exact={true} path="/"><h1>Main Page</h1></Route>
                        <Route path="/hello" component={Hello} />
                        <Route path="/goodbye" component={Goodbye} />
                    </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}