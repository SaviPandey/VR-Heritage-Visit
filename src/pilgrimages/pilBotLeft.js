import React from 'react'
import './pilBotLeft.css'

const Pilgrim_Info = (props) => {
  return (
    <div className="container-pilleft">
      <div className="info-left">
        <div className="info-top">
          <h3>Overview</h3>
          <table className='table'>
            <tbody>
              <tr>
                <td>No</td>
                <td>{props.r1c2}</td>
                <td>Ticket Fare</td>
                <td>{props.r1c4}</td>
                
              </tr>
              <tr className='r2'>
                <td>Type</td>
                <td>{props.r2c2}</td>
                <td>Parking</td>
                <td>{props.r2c4}</td>
                
              </tr>
              <tr>
                <td>Timmings</td>
                <td>{props.r3c2}</td>
                <td>Prayer Timings</td>
                <td>{props.r3c4}</td>
                
              </tr>
              <tr className='r4'>
                <td>Tour Time</td>
                <td>{props.r4c2}</td>
                <td>LandArea</td>
                <td>{props.r4c4}</td>
                
              </tr>
              <tr>
                <td>Size</td>
                <td>{props.r5c2}</td>
                <td>Built Year</td>
                <td>{props.r5c4}</td>
                
              </tr>
            </tbody>
          </table>
        </div>

        <div className="info-middle">
          <h3>About This Place</h3>
          <p>{props.about}</p>
        </div>

        <div className="info-bottom">
          <h3>Facts and Figures</h3>
          <p>{props.facts}</p>
        </div>

        <div className="info-bottom">
          <h3>Info</h3>
          <p>{props.Info}</p>
        </div>
        

      </div>
    </div>
  )
}

export default Pilgrim_Info;