import React from 'react';
import { Link } from 'react-router-dom';
import { isAutheticated } from '../auth/helper';
import Base from "../core/Base";


const UserDashBoard = () => {
    const {user : {name, email}
        } = isAutheticated()
    return (
        <Base title="UserDashBoard page">
        
            <div className="container card mt-5 mb-4">
        <h4 className="card-header text-align-center">User Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge bg-success mr-2"> Name : </span> {name}
          </li>
          <li className="list-group-item">
            <span className="badge bg-success mr-2">Email:</span> {email}
          </li>

          <li className="list-group-item">
            <span className="badge bg-danger">User Area</span>
          </li>
        </ul>
      </div>
      <div className="container row">
        <div className="col-6">
            <p>Click for <Link to="/">
            Here
        </Link> shopping</p>
        </div> 
         
        </div>
        </Base>
    )
}

export default UserDashBoard;