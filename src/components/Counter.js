import React from 'react'
import PropTypes from 'prop-types'
import { compose, lifecycle, withStateHandlers } from 'recompose'
import Div from "@components/utils/Div"

const Counter = ({state, onIncrement, onDecrement}) =>(
<Div>
    <h2>{state.counter}</h2>
    <button onClick={()=>onDecrement()}>-</button>
    <button onClick={()=>onIncrement()}>+</button>
    
</Div>
)

const StateHandlers = withStateHandlers(
    {
        state: {
            counter: 0
        }
    },
    {
        onIncrement: ({state})=> ()=>({
            state: {
                counter: state.counter + 1
            }
        }),
        onDecrement: ({state})=> ()=>({
            state: {
                counter: state.counter - 1
            }
        })
    }
)

const Lifecycle = lifecycle({})


    

export default compose(StateHandlers, Lifecycle)(Counter)