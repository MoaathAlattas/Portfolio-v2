import React from 'react'
import PropTypes from 'prop-types'

const Logo = ({ img, name, jobTitle }) => (
  <div style={{ textAlign: 'center' }}>
    {img && <img src={img} style={css.img} alt={name} />}
    <div style={css.nameTitleWrapper}>
      <h1 style={css.name}>{name}</h1>
      <h4 style={css.jobTitle}>{jobTitle}</h4>
    </div>
  </div>
)

let css = {
  img: {
    width: '150px',
    height: '150px',
    borderRadius: '500rem',
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
