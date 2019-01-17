import React from 'react'
import { Menu } from '../Menu';
import { Home } from '../Home'
import { Hello } from '../Hello';
import { Goodbye } from '../Goodbye';
import { Switch, Route, Redirect } from 'react-router-dom'

export default class ViewComponent extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Menu />
                <div style={{marginTop:"100px"}}>
                    <Switch>
                        <Redirect exact={true} from="**/index.html" to="/" /> {/* for Electron */}
                        <Route exact={true} path="/" component={Home} />
                        <Route path="/hello" component={Hello} />
                        <Route path="/goodbye" component={Goodbye} />
                    </Switch>
                </div>
            </div>
        )
    }
}