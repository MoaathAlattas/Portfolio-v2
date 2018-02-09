import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'semantic-ui-react'

const Logo = ({ name, jobTitle }) => (
  <React.Fragment>
    <Image src="https://moaathalattas.com/img/moaath-alattas.jpg" size="tiny" circular />
    <h1>{name}</h1>
    <h3>{jobTitle}</h3>
  </React.Fragment>
)

Logo.propTypes = {
  name: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired
}

export default Logo
