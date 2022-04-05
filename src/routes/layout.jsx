import React from 'react'
import {Outlet} from 'react-router-dom'
import MyNavBar from '../components/mynavbar'
import {Container} from 'react-bootstrap'

export default function LayoutPage() {
    return (
        <Container>
            <MyNavBar/>
            <Outlet/>
        </Container>
    )
}