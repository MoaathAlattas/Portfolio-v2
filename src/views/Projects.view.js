import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Segment } from 'semantic-ui-react'
import { ViewTitle } from '@components/ui'
import { Project } from '@components'

const ProjectsView = () => (
  <Fragment>
    <Helmet>
      <title>Projects</title>
    </Helmet>
    <div>
      <ViewTitle content="Projects" />
      <Segment>
        <Project items={{}} />
      </Segment>
    </div>
  </Fragment>
)

export default ProjectsView
