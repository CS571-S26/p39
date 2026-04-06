import { BrowserRouter, Link, Outlet} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../App.css';

export default function Layout() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Digital Art Gallery
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/artist-bios">Artist Bios</Nav.Link>
            <Nav.Link as={Link} to="/submission">Submit Artist</Nav.Link>
            <Nav.Link as={Link} to="/my-gallery">My Gallery</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
