import React from 'react'
import { Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import { Loading, RouteEnhanced } from '@components/utils'

const MainLayout = Loadable({ loader: () => import('@layouts/Main.layout'), loading: Loading })

const ContactView = Loadable({ loader: () => import('@views/Contact.view'), loading: Loading })
const AboutView = Loadable({ loader: () => import('@views/About.view'), loading: Loading })
const ProjectsView = Loadable({ loader: () => import('@views/Projects.view'), loading: Loading })

const Routes = () => (
  <Switch>
    <RouteEnhanced exact path="/" component={AboutView} layout={MainLayout} />
    <RouteEnhanced path="/projects" component={ProjectsView} layout={MainLayout} />
    <RouteEnhanced path="/contact" component={ContactView} layout={MainLayout} />

    <RouteEnhanced exact path="/ar" component={AboutView} layout={MainLayout} language="ar" direction="rtl" />
    <RouteEnhanced path="/ar/projects" component={ProjectsView} layout={MainLayout} language="ar" direction="rtl" />
    <RouteEnhanced path="/ar/contact" component={ContactView} layout={MainLayout} language="ar" direction="rtl" />
  </Switch>
)

export default Routes
