import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import ViewTitle from '@components/ui/ViewTitle'
import ContactForm from '@components/ContactForm'

const ContactView = () => (
  <Fragment>
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <div>
      <ViewTitle content="Contact" />
      <div className="ui segment">
        <ContactForm items={{}} />
      </div>
    </div>
  </Fragment>
)

export default ContactView
