import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import ViewComponent from "./component"

export const Menu = withRouter(connect(state => ({}), dispatcher => ({}))(ViewComponent))