import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Segment } from 'semantic-ui-react'
import config from '@config'
import { ViewTitle } from '@components/ui'
import { ContactForm } from '@components'

const ContactView = () => (
  <Fragment>
    <Helmet>
      <title>{config.title} - Contact</title>
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
