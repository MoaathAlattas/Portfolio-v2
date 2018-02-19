import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import ViewTitle from '@components/ui/ViewTitle'
import SubTitle from '@components/ui/SubTitle'
import List from '@components/ui/List'
import data from '@data/about.json'

const View = ({ language }) => (
  <Fragment>
    <Helmet>
      <title lang={language}>{data[language].title}</title>
    </Helmet>
    <ViewTitle content={data[language].title} />
    <div className="view-content">
      <p dangerouslySetInnerHTML={{ __html: data[language].content }} />

      <div className="ui segment">
        <SubTitle content={data[language].education.title} />
        <List items={data[language].education.items} type={1} />
      </div>

      <div className="ui segment">
        <SubTitle content={data[language].experience.title} />
        <List items={data[language].experience.items} type={2} />
      </div>

      <div className="ui segment">
        <SubTitle content={data[language].skills.title} />
        <List items={data[language].skills.items} type={3} />
      </div>
    </div>
    <div style={{ height: '4000px' }} />
  </Fragment>
)

View.propTypes = {
  language: PropTypes.string
}

export default View
