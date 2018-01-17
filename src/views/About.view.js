import React from 'react'
import { Segment } from 'semantic-ui-react'
import { MainLayout } from '@layouts'
import { ViewTitle, SubTitle } from '@components/ui'
import { Div } from '@components/utils'
import { Education, Experience, Skills } from '@components'

const AboutView = (props) =>(
<Div>
    <ViewTitle content='About' />
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
</Div>
)

export default AboutView