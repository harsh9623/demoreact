import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Contact1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Image from './sitting-table-with-chairs-yellow-sofa-restaurant-with-panoramic-view_114579-1523.jpg'
import image from './traditional-flamenco-cornthe-feria-de-abril-april-spain_357619-1932.jpg'

function Contact1(){
    return(
        <>
        <Container fluid id='contact-container'>
                <Row id='contact-row'>
                    <Col className='Contactdiv1'>
                        <h1 id='mainh1'>Contact us</h1></Col>
                </Row>
            </Container>

            <Container id='form-container'>
                <Col className='Forminfo'>
                    <Col className='Contacinfo' >
                        <h3 id='mainh3'>Contact Information</h3>
                        <p id='p2'>Say something to start a live chat!</p>
                        <table id='table'>
                            <tr id='trow'>
                                <td id='tdata'><FontAwesomeIcon icon={faPhone} className="icons" /></td>
                                <td id='tdata'>+91-9130001954</td>
                            </tr>
                            <tr id='trow'>
                                <td id='tdata'><FontAwesomeIcon icon={faEnvelope} className="icons" /></td>
                                <td id='tdata'>healthbistro14@gmail.com</td>
                            </tr>
                            <tr id='trow'>
                                <td id='tdata'><FontAwesomeIcon icon={faLocationDot} className="icons" /></td>
                                <td id='tdata'>197,Unthkhana Road, Beside <br></br> Haldiram, Medical Square, Nagpure - 440024</td>
                            </tr>
                            <tr id='trow'>
                                <td id='tdata'><FontAwesomeIcon icon={faLocationDot} className="icons" /></td>
                                <td id='tdata'>healthbistro14</td>
                            </tr>
                        </table>
                    </Col>


                    <Col className='inputbox' cd={5} md={12} >
                        <Form id='form1'>

                            <Row id='input-row'>

                                <Col className="input-col" cd={5} md={12} >
                                    <Form.Group as={Col}  id='form-group'>
                                        <Form.Label id='form-label'>First name</Form.Label>
                                        <Form.Control type="email" id='input1' />
                                    </Form.Group>
                                </Col>

                                <Col className="input-col">

                                    <Form.Group as={Col} controlId="formGridPassword" id='form-group'>
                                        <Form.Label id='form-label'>Last name</Form.Label> <br></br>
                                        <Form.Control type="password" id='input1' />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="input-col">
                                    <Form.Group as={Col} controlId="formGridEmail" id='form-group'>
                                        <Form.Label id='form-label'>Email</Form.Label>  <br></br>
                                        <Form.Control type="email" id='input1' />
                                    </Form.Group>
                                </Col>

                                <Col className="input-col">

                                    <Form.Group as={Col} controlId="formGridPassword" id='form-group'>
                                        <Form.Label id='form-label'>Phone</Form.Label>
                                        <Form.Control type="number" id='input1' />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row id='feedback-row'>
                                <Col id='feedback-col'>
                                    <Form.Group className="feedback-input" controlId="formGridAddress1">
                                        <Form.Label id='form-label'>Feedback</Form.Label><br></br>
                                        <Form.Control placeholder="Write your messange..."  id='feedback-messege'/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Button className="form-button" variant="primary" type="submit">
                                Send message
                            </Button>

                        </Form>
                    </Col>
                </Col>

            </Container>
            {/* <Container> */}

                {/* </Row> */}
                <Container className="cafediv">
                <Row id='cafe-row'>
                    <Col sm={6} id='cafe-col-one'>
                        <h4 id='Ch4'>-- CAFE</h4><br></br>
                        <h5 id='Ch5'>Taste the different with us</h5> <br></br>
                        <p id='Para'>Lorem ipsium doror sit amet cosectetur. Sit congue iaculis risus
                            convalls facilisis massa amet luctus</p>
                    </Col>
                    <Col sm={6} id='cafe-col-two'>
                        <img id="imgdiv1" src={Image}/>
                        <img id="imgdiv2" src={image}/>
                    </Col>
                </Row >

                < Row id='sample-row' >
                </Row >
                </Container >

                < Container fluid  id='iframe'>
                    <Row id='google-row'>
                        <Col id='iframe-col'> <iframe
                            className="gmap_iframe"
                            width="100%"
                            height="400"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=University%20of%20Oxford&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                        ></iframe></Col>
                    </Row>
              
                </Container>
        </>
    )
}

export default Contact1 