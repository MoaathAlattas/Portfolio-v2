import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { ViewTitle } from '@components/ui'
import { Project } from '@components'

const ProjectsView = () => (
  <Fragment>
    <Helmet>
      <title>Projects</title>
    </Helmet>
    <div>
      <ViewTitle content="Projects" />
      <div className="ui segment">
        <Project items={{}} />
      </div>
    </div>
  </Fragment>
)

export default ProjectsView
