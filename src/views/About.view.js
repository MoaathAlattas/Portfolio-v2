import React, { Fragment } from 'react'
import { Segment } from 'semantic-ui-react'
import { ViewTitle, SubTitle } from '@components/ui'
import { Education, Experience, Skills } from '@components'

const AboutView = () => (
  <Fragment>
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
  </Fragment>
)

export default AboutView
