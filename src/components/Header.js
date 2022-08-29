import React from 'react';
import {Button, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './Header.css'
import MuiSubMenu from "./MuiSubMenu";
import {menudata} from "./mockdata";
import TextField from '@mui/material/TextField';

export default function Header(props) {

    const data = menudata;
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className="navbar-brand" href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {data.map((menu, index) => {
                                return (
                                    <MuiSubMenu key={'menu' + menu.name} data={menu}/>
                                )
                            })}
                        </Nav>
                        <Nav>
                            <TextField id="outlined-search" label="Search field" type="search" />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}


