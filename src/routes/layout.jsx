import React from 'react'
import {Outlet} from 'react-router-dom'
import MyNavBar from '../components/mynavbar'
import {Container} from 'react-bootstrap'
import Footer from './footer.jsx'
import Founders from './founders'
import Contact from './contact'

export default function LayoutPage() {
    return (
        <Container>
            <MyNavBar />
            <Outlet />
            <Founders />
            <Contact />
            <Footer />
        </Container>
    )
}