
import Button from 'react-bootstrap/Button';
import { Container, Nav, Navbar } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';


const NavigationBar = () => {
    return (
        <div>
        <Navbar>
        <Container>
            <Navbar.Brand>Djogdja Ambulance Service</Navbar.Brand>
            <Nav>
            
            <Nav.Link href="#beranda">Beranda</Nav.Link>
            <Nav.Link href="#Pelayanan">Pelayanan</Nav.Link>
            <Nav.Link href="#Hubungi">Hubungi</Nav.Link>
            </Nav>
            </Container>
            </Navbar>
            
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/285730582_5468864473176548_2241280466781529780_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pMYUtt6CemYAX9X8f71&_nc_ht=scontent-sin6-3.xx&oh=00_AT_NEQaA1rYaZj57_CfSrFeAtGPPWZzqmpi7vWZRQzu16A&oe=632E3CC2" height="50%"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/289691092_5522508947812100_4387645177783636453_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XuIu5wdYne4AX9_ltJ7&_nc_ht=scontent-sin6-3.xx&oh=00_AT9JMY3BsQy9vbtcP8KPwv09Jqsf84eKb89vjVIBfpxcFA&oe=632E792F"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.ambulancevip.com/wp-content/uploads/2018/04/galery3-resize.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>
           .
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </div>
            
    )
}

export default NavigationBar