import React, { Fragment } from 'react'
import { Segment } from 'semantic-ui-react'
import { ViewTitle } from '@components/ui'
import { ContactForm } from '@components'

const ContactView = () => (
  <Fragment>
    <ViewTitle content="Contact" />
    <Segment>
      <ContactForm />
    </Segment>
  </Fragment>
)

export default ContactView
