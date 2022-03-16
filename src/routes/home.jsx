import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from './../components/navbar'

export default function HomePage() {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )
}