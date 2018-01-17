import React from 'react'
import { Link } from 'react-router-dom'
import Div from "@components/utils/Div"
import { Menu, Icon } from 'semantic-ui-react'

const AppMenu = () =>( 
<Div>    
    <Menu.Item name='user' icon='user' content='About' as={Link} to='/' />
    <Menu.Item name='picture' icon='picture' content='Projects' as={Link} to='/projects' />
    <Menu.Item name='user' icon='envelope' content='Contact' as={Link} to='/contact' />
</Div>
)

export default AppMenu