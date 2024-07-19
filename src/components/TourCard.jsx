import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { IoLocationOutline } from "react-icons/io5";
import './css/TourCard.css'; // Import CSS file for custom styles

function TourCard(props) {
  return (
    <Col onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} onClick={props.onClick}>
      <Card style={{ width: '40rem' }}>
        <div className="zoom-card">
          <Card.Img
            variant="top"
            src={props.image}
            alt="Card image"
            className="zoom-img"
            style={{
              borderTopLeftRadius: '15px',
              borderTopRightRadius: '15px',
            }}
          />
        </div>
        <Card.Body>
          <Card.Title style={{ fontSize: '2.0rem', color: '#353935', textAlign: 'left', marginLeft:'15px' }}>{props.title}</Card.Title>
          <Card.Subtitle style={{ fontSize: '1.8rem', color: '#929292', textAlign: 'left', marginBottom: '10px', marginLeft:'15px' }}><IoLocationOutline />{props.subtitle}</Card.Subtitle>
          {/* <Card.Text style={{ color: 'red' }}>{props.text}</Card.Text> */}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default TourCard;
