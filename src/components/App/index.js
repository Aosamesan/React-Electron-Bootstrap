import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ViewComponent from "./component"

export const App = withRouter(connect(state => ({}), dispatch => ({}))(ViewComponent))