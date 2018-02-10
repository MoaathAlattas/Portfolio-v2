import React from 'react'
import PropTypes from 'prop-types'
import { List, Icon } from 'semantic-ui-react'

const Education = ({ items }) => (
  <List divided relaxed="very">
    {items.map((item, i) => (
      <List.Item key={i}>
        <Icon name={item.icon} size="big" />
        <List.Content>
          <List.Header>{item.title}</List.Header>
          <List.Description>{item.description}</List.Description>
        </List.Content>
      </List.Item>
    ))}
  </List>
)
Education.propTypes = {
  items: PropTypes.array.isRequired
}

export default Education
