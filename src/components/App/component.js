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
                        <Redirect exact={true} from="**/index.html" to="/home" /> {/* for Electron */}
                        <Redirect exact={true} from="/" to="/home" /> {/* for React */}
                        <Route path="/home" component={Home} />
                        <Route path="/hello" component={Hello} />
                        <Route path="/goodbye" component={Goodbye} />
                    </Switch>
                </div>
            </div>
        )
    }
}