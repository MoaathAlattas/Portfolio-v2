import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import { RouteWithLayout, Loading } from '@components/utils'

import { MainLayout } from '@layouts'

const AboutView = Loadable({ loader: () => import('@views/About.view'), loading:Loading})
const ProjectsView = Loadable({ loader: () => import('@views/Projects.view'), loading:Loading})
const ContactView = Loadable({ loader: () => import('@views/Contact.view'), loading:Loading})

const Routes = () =>(
<Switch>
    <RouteWithLayout exact path="/" title="About" component={AboutView} layout={MainLayout} />
    <RouteWithLayout path="/projects" title="Projects" component={ProjectsView} layout={MainLayout} />
    <RouteWithLayout path="/contact" title="Contact" component={ContactView} layout={MainLayout} />
</Switch>
)


export default Routes