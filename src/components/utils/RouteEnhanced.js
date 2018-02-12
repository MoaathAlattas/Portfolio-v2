import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import config from '@data/config.json'

const RouteEnhanced = ({ layout: Layout, component: Component, language, ...props }) => (
  <Layout language={language}>
    <Route render={routeProps => <Component {...routeProps} language={language} />} {...props} />
  </Layout>
)

RouteEnhanced.propTypes = {
  layout: PropTypes.func,
  component: PropTypes.func.isRequired,
  language: PropTypes.string
}

RouteEnhanced.defaultProps = {
  layout: Fragment,
  language: config.language,
  direction: [config.language].direction
}

export default RouteEnhanced
