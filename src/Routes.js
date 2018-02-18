import React from 'react'
import Switch from 'react-router-dom/Switch'
import Loadable from 'react-loadable'
import Loading from '@components/utils/Loading'
import RouteEnhanced from '@components/utils/RouteEnhanced'

const MainLayout = Loadable({ loader: () => import('@layouts/Main.layout'), loading: Loading })
const AboutView = Loadable({ loader: () => import('@views/About.view'), loading: Loading })
const ProjectsView = Loadable({ loader: () => import('@views/Projects.view'), loading: Loading })
const ContactView = Loadable({ loader: () => import('@views/Contact.view'), loading: Loading })

const Routes = () => (
  <Switch>
    <RouteEnhanced exact path="/" component={AboutView} layout={MainLayout} />
    <RouteEnhanced exact path="/projects" component={ProjectsView} layout={MainLayout} />
    <RouteEnhanced exact path="/contact" component={ContactView} layout={MainLayout} />

    <RouteEnhanced exact path="/ar" component={AboutView} layout={MainLayout} language="ar" direction="rtl" />
    <RouteEnhanced exact path="/ar/projects" component={ProjectsView} layout={MainLayout} language="ar" direction="rtl" />
    <RouteEnhanced exact path="/ar/contact" component={ContactView} layout={MainLayout} language="ar" direction="rtl" />
  </Switch>
)

export default Routes
