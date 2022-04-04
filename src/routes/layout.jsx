import React from 'react'
import {Outlet} from 'react-router-dom'
import MyNavBar from './../components/mynavbar'
import {Container, Button, Col, Row, Image, Typography, Alert, Badge} from 'react-bootstrap'
import homepic from './../images/homepic.png'

export default function LayoutPage() {
    return (
        <Container>
            <MyNavBar/>
            <Outlet/>
        </Container>
    )
}