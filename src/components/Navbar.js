import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ()=> (
<ul>
    <li><Link to="./">Index</Link></li>
    <li><Link to="./page">Page</Link></li>
</ul>
)

export default Navbar