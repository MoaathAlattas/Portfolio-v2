import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Segment } from 'semantic-ui-react'
import { ViewTitle } from '@components/ui'
import { ContactForm } from '@components'

const ContactView = () => (
  <Fragment>
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <div>
      <ViewTitle content="Contact" />
      <Segment>
        <ContactForm />
      </Segment>
    </div>
  </Fragment>
)

export default ContactView
