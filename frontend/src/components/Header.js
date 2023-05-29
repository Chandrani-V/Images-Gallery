import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { ReactComponent as Logo} from '../images/logo.svg'

const navbarStyle = {
    backgroundColor: 'lightblue'
};

const Header = (title) => {
    return (

        <Navbar style={navbarStyle }  variant="light">
            <Container>
                
                <Logo alt={title}  style={{maxWidth:'12rem', maxHeight:'2rem'}}/>
            </Container>
        </Navbar>
    )
};
//if u define const{title}=props...u can simply use {title} 
//
export default Header;
//<Navbar.Brand href="/">{props.title}</Navbar.Brand>

