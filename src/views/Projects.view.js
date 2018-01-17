import React from 'react'
import config from '@config'
import { MainLayout } from '@layouts'
import { ViewTitle } from '@components/ui'
import { Div } from '@components/utils'
import { Project } from '@components'

const ProjectsView = () =>(
<Div>
    <ViewTitle content='Projects' />
    <Project items={{}} />
</Div>
)

export default ProjectsView