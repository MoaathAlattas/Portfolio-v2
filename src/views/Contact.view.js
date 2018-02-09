import React from 'react'
import { Segment } from 'semantic-ui-react'
import { ViewTitle } from '@components/ui'
import { Div } from '@components/utils'
import { ContactForm } from '@components'

const ContactView = () => (
  <Div>
    <ViewTitle content="Contact" />
    <Segment>
      <ContactForm />
    </Segment>
  </Div>
)

export default ContactView
