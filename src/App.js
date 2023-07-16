import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'bootstrap';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import Contact from './components/Contact';
import Allcountacts from './components/Allcontacts';
import CreateContact from './components/CreateContact';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import Menus from './components/Menus';
import { BrowserRouter as Router,  Route , Routes} from 'react-router-dom';
import UpdateContact from './components/UpdateContact';

function App() {
  return (
    
      <Router>
      <div>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}><Menus /></Col>
            <Col md={8}>
              <Routes>
              {/* <Switch> */}
                <Route path="/" element={<Home/>} /> 
                <Route path="/create-contact" element={<CreateContact/>} />
                <Route path="/view-contacts" element={<Allcountacts/>} />
                <Route path="/update-contact/:id" element={<UpdateContact/>} />
              </Routes>
              {/* </Switch> */}
            </Col>
          </Row>
        </Container>
        </div>
      </Router>
    
  );
}

export default App;
