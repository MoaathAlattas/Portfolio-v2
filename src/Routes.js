import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import { Loading } from '@components/utils'

import { MainLayout } from '@layouts'

const AboutView = Loadable({ loader: () => import('@views/About.view'), loading: Loading })
const ProjectsView = Loadable({ loader: () => import('@views/Projects.view'), loading: Loading })
const ContactView = Loadable({ loader: () => import('@views/Contact.view'), loading: Loading })

const Routes = () => (
  <Switch>
    <MainLayout>
      <Route exact path="/" component={AboutView} />
      <Route path="/projects" component={ProjectsView} />
      <Route path="/contact" component={ContactView} />
    </MainLayout>
  </Switch>
)

export default Routes
