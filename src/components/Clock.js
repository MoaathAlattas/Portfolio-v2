import React from 'react'
import PropTypes from 'prop-types'
import { compose, lifecycle, withStateHandlers } from 'recompose'
import Div from "@components/utils/Div"

const Clock = ({state}) =>(
<Div>
    {state.time}
</Div>
)

const StateHandlers = withStateHandlers(
    {
        state: {
            time: new Date().toLocaleTimeString()
        }
    },
    {
        tick: ({state})=> (value)=>({
            state: {
                time: new Date().toLocaleTimeString()
            }
        })
    }
)

const Lifecycle = lifecycle({
    componentDidMount(){
        this.clock = setInterval(()=>this.props.tick(), 1000)
    },
    componentWillUnmount(){
        clearInterval(this.clock)
    }
})

export default compose(StateHandlers, Lifecycle)(Clock)