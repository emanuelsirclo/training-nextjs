import { 
    Navbar as Navigation,
    Nav,
    NavDropdown,
    Container
 } from 'react-bootstrap';

const Navbar = () => {
    return ( 
        <Navigation bg="light" expand="lg" className="mb-4">
            <Container>
                <Navigation.Brand href="/">Next Training</Navigation.Brand>
                <Navigation.Toggle aria-controls="basic-navbar-nav" />
                <Navigation.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/category">Category</Nav.Link>
                </Nav>
                </Navigation.Collapse>
            </Container>
        </Navigation>
     );
}
 
export default Navbar;