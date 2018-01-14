import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from "react-helmet"
import Navbar from '@components/Navbar'
import Div from "@components/utils/Div"


const Main = ({children, pageTitle}) =>(
<Div>
    <Helmet>
        <title>{pageTitle}</title>
    </Helmet>
    <Navbar />
    {children}
</Div>
)

Main.propTypes ={
    children: PropTypes.node.isRequired,
    pageTitle: PropTypes.string.isRequired
}

export default Main