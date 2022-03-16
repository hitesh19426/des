import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            {/* <h3> Navbar </h3> */}
            <nav>
                <Link to = "/"> DESy </Link>
                <Link to = "/about"> About </Link>
                <Link to = "/eligibility"> Eligibility </Link>
                <Link to = "/courses" > Courses </Link>
                <Link to = "/founders" > Founders </Link>
                <Link to = "/contact"> Contact </Link>
                <Link to = "/login"> Login </Link>
                <Link to = "/signup"> Sign Up </Link>
            </nav>
        </div>
    )
}