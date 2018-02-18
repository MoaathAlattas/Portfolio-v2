import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { ViewTitle, SubTitle, List } from '@components/ui'
import aboutData from '@data/about.json'

const AboutView = ({ language }) => (
  <Fragment>
    <Helmet>
      <title lang={language}>{aboutData[language].title}</title>
    </Helmet>
    <ViewTitle content={aboutData[language].title} />
    <div className="view-content">
      <p dangerouslySetInnerHTML={{ __html: aboutData[language].content }} />

      <div className="ui segment">
        <SubTitle content={aboutData[language].education.title} />
        <List items={aboutData[language].education.items} type={1} />
      </div>

      <div className="ui segment">
        <SubTitle content={aboutData[language].experience.title} />
        <List items={aboutData[language].experience.items} type={2} />
      </div>

      <div className="ui segment">
        <SubTitle content={aboutData[language].skills.title} />
        <List items={aboutData[language].skills.items} type={3} />
      </div>
    </div>
    <div style={{ height: '4000px' }} />
  </Fragment>
)

AboutView.propTypes = {
  language: PropTypes.string
}

export default AboutView
