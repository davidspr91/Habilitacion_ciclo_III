import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import HeaderButtons from "./components/HeaderButtons";

const Header = ({ isLoggedIn, login, }) => {
    return (
        <Navbar bg="cyan" variant="light">
            <Container>
                <Navbar.Brand href="/"><Navbar.Brand href="#home"></Navbar.Brand> </Navbar.Brand>
                <Nav className="me-auto">
                    <HeaderButtons
                        isLoggedIn={isLoggedIn}
                        setLogin={login}

                    />
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;