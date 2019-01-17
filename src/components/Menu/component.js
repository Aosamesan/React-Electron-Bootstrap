import React from 'react'
import { NavLink } from 'react-router-dom'

export default class ViewComponent extends React.Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu"
                        aria-controls="main-menu" aria-expanded="false" aria-label="Toggle Navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="main-menu">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to={'/home'} className="nav-link" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/hello'} className="nav-link" activeClassName="active">Hello</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/goodbye'} className="nav-link" activeClassName="active">Goodbye</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}