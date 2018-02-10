import React from 'react'
import PropTypes from 'prop-types'
import { List, Icon, Segment } from 'semantic-ui-react'

const ListEnhanced = ({ items, type }) => {
  if (type === 1) {
    return (
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
  } else if (type === 2) {
    return (
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
  } else if (type === 3) {
    return (
      <List horizontal>
        {items.map((item, i) => (
          <List.Item key={i}>
            <List.Content>
              <List.Header>
                <Icon name={item.icon} />
                {item.title}
              </List.Header>
              <Segment>
                <List items={item.list} />
              </Segment>
            </List.Content>
          </List.Item>
        ))}
      </List>
    )
  }
  return null
}

ListEnhanced.propTypes = {
  items: PropTypes.array.isRequired,
  type: PropTypes.number
}

ListEnhanced.defaultProps = {
  type: 1
}

export default ListEnhanced
