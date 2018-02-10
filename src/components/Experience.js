import React from 'react'
import PropTypes from 'prop-types'
import { List, Icon } from 'semantic-ui-react'

const Experience = ({ items }) => (
  <List divided relaxed="very">
    {items.map((item, i) => (
      <List.Item key={i}>
        <List.Content>
          <List.Header>
            <Icon name={item.icon} />
            {item.title}
          </List.Header>
          <List.Description>{item.description}</List.Description>
        </List.Content>
      </List.Item>
    ))}
  </List>
)

Experience.propTypes = {
  items: PropTypes.array.isRequired
}

export default Experience
