import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { ViewTitle } from '@components/ui'
import { ContactForm } from '@components'

const ContactView = () => (
  <Fragment>
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <div>
      <ViewTitle content="Contact" />
      <div className="ui segment">
        <ContactForm />
      </div>
    </div>
  </Fragment>
)

export default ContactView
