import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import config from '@config'

const RouteWithLayout = ({ component: Component, layout: Layout, title, ...props }) => (
  <Layout>
    <Helmet>
      <title>
        {config.title} {title && `- ${title}`}
      </title>
    </Helmet>
    <Route {...props} component={Component} />
  </Layout>
)

RouteWithLayout.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.func,
  title: PropTypes.string
}

export default RouteWithLayout
