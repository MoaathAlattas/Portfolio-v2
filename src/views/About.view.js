import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Segment } from 'semantic-ui-react'
import config from '@config'
import { ViewTitle, SubTitle, ListEnhanced } from '@components/ui'

const AboutView = () => (
  <Fragment>
    <Helmet>
      <title>{config.title} - About</title>
    </Helmet>
    <ViewTitle content="About" />
    <div className="view-content">
      <p>
        <div dangerouslySetInnerHTML={{ __html: aboutText }} />
      </p>

      <Segment>
        <SubTitle content="Education" />
        <ListEnhanced items={EducationItems} type={1} />
      </Segment>

      <Segment>
        <SubTitle content="Experience" />
        <ListEnhanced items={ExperienceItems} type={2} />
      </Segment>

      <Segment>
        <SubTitle content="Technical Skills" />
        <ListEnhanced items={SkillsItems} type={3} />
      </Segment>
    </div>
    <div style={{ height: '4000px' }} />
  </Fragment>
)

let aboutText = `Web <strong>developer</strong> and <strong>designer</strong> currently based in Winnipeg, <strong>Canada</strong>. I enjoy designing and
coding and I am passionate about Front-End development.`

let EducationItems = [
  {
    icon: 'university',
    title: 'Bachelor in Applied Computer Science',
    description: 'University of Winnipeg'
  },
  {
    icon: 'university',
    title: 'Bachelor in Applied Computer Science',
    description: 'University of Winnipeg'
  }
]

let ExperienceItems = [
  {
    icon: 'circle outline',
    title: 'Investors Group',
    description:
      'Assisting with data quality investigation, data quality assurance, and transitioning legacy database reporting into the enterprise data environment.'
  },
  {
    icon: 'circle outline',
    title: 'Freelancing',
    description: 'Involved in multiple Front-End projects using different tools and technologies.'
  },
  {
    icon: 'circle outline',
    title: 'phpBB Support Team',
    description:
      'I was part of the support team of an open source forum software, phpBB. My role was helping the community with template related problems as well as designing and coding production ready templates.'
  }
]

let SkillsItems = [
  {
    icon: 'terminal',
    title: 'Languages',
    list: ['HTML5', 'CSS3', 'JavaScript/Node.js (ES)', 'PHP']
  },
  {
    icon: 'options',
    title: 'Frameworks & CMS',
    list: ['Express js', 'Angular', 'Meteor', 'WordPress', 'phpBB']
  }
]

export default AboutView
