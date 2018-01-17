import React from 'react'
import PropTypes from 'prop-types'
import { Toggle } from 'react-powerplug'
import { AppSidebar } from "@components/ui"
import { Segment, Sidebar } from 'semantic-ui-react'

const Main = ({children}) =>(
<div style={{height: '100vh'}}>
    <Toggle initial={true}>
    {({ on, toggle }) => (
        <Sidebar.Pushable>   
            <AppSidebar open={on} OnToggle={toggle} />
            <Sidebar.Pusher >
                <Segment basic style={{ height: '94.2vh'}}>
                    {children}
                </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>    
    )}
</Toggle>  
</div>
)

Main.propTypes = {
    children: PropTypes.node.isRequired
}

export default Main