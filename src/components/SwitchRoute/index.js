import * as React from 'react'
import PropTypes from 'prop-types'
import {
  Switch, Redirect
} from 'react-router-dom'
import GuardRoute from 'components/GuardRoute'
import GuardOnlyRoute from 'components/GuardOnlyRoute'

const SwitchRoute = ({ routes = [] }) => {

  return (
    <Switch>
      {routes.map((route, i) => {
        const { component: Component, ...rest } = route
        return route.auth ? <GuardRoute key={i} {...rest}> <Component /></GuardRoute> : <GuardOnlyRoute key={i} {...rest}> <Component /></GuardOnlyRoute>
      })}
      <Redirect from='*' to='/' />
    </Switch>
  )
}

SwitchRoute.propTypes = {
  routes: PropTypes.array
}

export default SwitchRoute