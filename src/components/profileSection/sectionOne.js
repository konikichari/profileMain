import React from 'react'
import bg2 from '../../images/bg.webp'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './sectionOne.css'
export default function sectionOne() {
  return (
    <div >
      {/* <img src={bg2}></img> */}
        <Container className='mt-3 mainBanner'>
      <Row className='p-4'>
        <Col sm={8}>
            <h3 className='text-start'>Hello folk!!!!!</h3>
            <p className='text-start'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id perferendis odit a quis facilis expedita enim fugiat quibusdam reiciendis debitis! <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni numquam libero labore quaerat quod dolorem eveniet voluptatem quasi impedit nisi sunt nam amet alias voluptates, rem neque explicabo ratione? Quae!</p>
            <div>
            <button className="btn fourth">Contact</button>
            </div>
        </Col>
        <Col sm={4}>right</Col>
      </Row>
      </Container>

    </div>
  )
}
