import React from 'react'
import Div from "@components/utils/Div"
import { AppMenu } from "@components/ui"
import { Sidebar, Menu, Button } from 'semantic-ui-react'

const AppSidebar = ({open, OnToggle}) =>(
<Div>
<Button onClick={OnToggle} 
                compact
                attached
                >{open?'<':'>'}
                </Button>
    <Sidebar 
            animation='push'
            visible={open}
            as={Menu}
            icon={!open}
            vertical 
            inverted>

        <AppMenu />
    </Sidebar>
</Div>
)
    
export default AppSidebar

// style={{width:`${open?'280px':'100px'}`}}
// className='visible'