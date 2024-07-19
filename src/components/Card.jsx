import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './css/Card.css';

const Card_b = (props) => {
   
  return (
    <div className='blog-card'>
      <Card className='blog-card' style={{ width: '45%', margin: '30px', float: 'left', height: '450px', position: 'relative' }}>
          <Card.Img className='blog-img' variant="top" src={props.src} style={{ width: '90%', height: '250px', margin: '20px' }} />
          <div className="orange-square">
            <div className="text">
              <p>{props.date}</p>
              <p>{props.day}</p>
            </div>
          </div>
        <Card.Body>
          <ul className='temple-name'>
            <li>{props.name}</li>
          </ul>
          <h2>{props.details}</h2>
          {props.link && (
            <NavLink to={props.link} className="nav-link read-more-link">
              Read More <FontAwesomeIcon icon={faArrowRight}  className="arrow-icon" style={{ color: "#fe4c10" }} />
            </NavLink>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Card_b;
