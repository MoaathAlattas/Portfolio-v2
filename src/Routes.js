import React from 'react'
import Switch from 'react-router-dom/Switch'
import Redirect from 'react-router-dom/Redirect'
import Loadable from 'react-loadable'
import Loading from '@components/utils/Loading'
import RouteEnhanced from '@components/utils/RouteEnhanced'

const MainLayout = Loadable({ loader: () => import('@layouts/Main'), loading: Loading })

const AboutView = Loadable({ loader: () => import('@views/About'), loading: Loading })
const ProjectsView = Loadable({ loader: () => import('@views/Projects'), loading: Loading })
const ContactView = Loadable({ loader: () => import('@views/Contact'), loading: Loading })

const Routes = () => (
  <Switch>
    <Redirect exact from="/" to="/about" />
    <Redirect exact from="/ar" to="/ar/about" />

    <RouteEnhanced exact path="/about" component={AboutView} layout={MainLayout} />
    <RouteEnhanced exact path="/projects" component={ProjectsView} layout={MainLayout} />
    <RouteEnhanced exact path="/contact" component={ContactView} layout={MainLayout} />

    <RouteEnhanced exact path="/ar/about" component={AboutView} layout={MainLayout} language="ar" />
    <RouteEnhanced exact path="/ar/projects" component={ProjectsView} layout={MainLayout} language="ar" />
    <RouteEnhanced exact path="/ar/contact" component={ContactView} layout={MainLayout} language="ar" />
  </Switch>
)

export default Routes
