import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from '..'

function NavBar() {
    const {user} = useContext(AppContext)

    const clickHandler = () => {
        user.setIsAuth(false)
        localStorage.clear()
    }

    return (
    <Navbar>
      <Container>
        <Navbar.Brand style={{color: 'white'}}>In the picture you can see lake Baikal</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Link to="/auth" style={{color: 'white', textDecoration: 'none'}} onClick={clickHandler}>Exit</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar