import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          地下管线测绘 APP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              首页
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              关于我们
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              联系方式
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              登录
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
