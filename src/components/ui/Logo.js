import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'semantic-ui-react'

const Logo = ({ img, name, jobTitle }) => (
  <div style={{ textAlign: 'center' }}>
    {img && <Image src={img} style={css.img} size="small" centered spaced circular />}
    <div style={css.nameTitleWrapper}>
      <h1 style={css.name}>{name}</h1>
      <h3 style={css.jobTitle}>{jobTitle}</h3>
    </div>
  </div>
)

let css = {
  img: {
    margin: '7px'
  },
  nameTitleWrapper: {
    margin: '7px',
    textAlign: 'center'
  },
  name: {
    margin: '0'
  },
  jobTitle: {
    margin: '0'
  }
}

Logo.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  jobTitle: PropTypes.string.isRequired
}

export default Logo
