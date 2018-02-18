import React from 'react'
import PropTypes from 'prop-types'

const Logo = ({ img, name, jobTitle }) => (
  <div style={{ textAlign: 'center' }}>
    {img && <img src={img} style={css.img} />}
    <div style={css.nameTitleWrapper}>
      <h1 style={css.name}>{name}</h1>
      <h4 style={css.jobTitle}>{jobTitle}</h4>
    </div>
  </div>
)

let css = {
  img: {
    width: '150px',
    height: 'auto',
    borderRadius: '500rem',
    position: 'relative',
    verticalAlign: 'middle',
    maxWidth: '100%',
    backgroundColor: 'transparent',
    display: 'inline-block',
    marginTop: '7px',
    marginLeft: '0.5em',
    marginRight: '0.5em'
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
