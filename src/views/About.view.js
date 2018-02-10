import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Segment } from 'semantic-ui-react'
import config from '@config'
import { ViewTitle, SubTitle } from '@components/ui'
import { Education, Experience, Skills } from '@components'

const AboutView = () => (
  <Fragment>
    <Helmet>
      <title>{config.title} - About</title>
    </Helmet>
    <div>
      <ViewTitle content="About" />
      <Segment>
        <p>Text Text Text</p>
      </Segment>

      <Segment>
        <SubTitle content="Education" />
        <Education items={{}} />
      </Segment>

      <Segment>
        <SubTitle content="Experience" />
        <Experience items={{}} />
      </Segment>

      <Segment>
        <SubTitle content="Technical Skills" />
        <Skills items={{}} />
      </Segment>
    </div>
  </Fragment>
)

export default AboutView
