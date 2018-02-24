import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ViewTitle from '@components/ui/ViewTitle'
import ContactForm from './ContactForm'

const View = ({ language }) => (
  <Fragment>
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <div>
      <ViewTitle content="Contact" />
      <div className="view-content">
        <div className="ui segment">
          <ContactForm language={language} />
        </div>
      </div>
    </div>
  </Fragment>
)

View.propTypes = {
  language: PropTypes.string
}

export default View
