import React from "react";
import Menu from "../core/Menu";

const aboutus = () => {
  return (
    <div>
      <Menu />
      <div className="about-section">
        <h1 className = "text-white">About Us Page</h1>
      </div>
      <h2 className = "text-white">Our Team</h2>
      <div className="row">
        <div className="col-3 ">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbmtSxGwbnc-r6-WEqd-V_vpslvSue3QBSQ&usqp=CAU"
              alt="Code"
            />
            <div className="container">
              <h4>Dhiraj Patil</h4>
              <p>Web Developer</p>
              <p>Frontend and Designing</p>
              <p>dhirajpatil2404@gmail.com</p>
              <p>
                <button className="btn-success">Contact</button>
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <img
              src="https://png.pngtree.com/png-vector/20190118/ourlarge/pngtree-vector-female-student-icon-png-image_326761.jpg"
              alt="Code"
            />
            <div className="container">
              <h4>Kiran Sapkale</h4>
              <p>Web Developer</p>
              <p>Frontend and Designing</p>
              <p>kiransapkale32@gmail.com</p>
              <p>
                <button className="btn-success">Contact</button>
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbmtSxGwbnc-r6-WEqd-V_vpslvSue3QBSQ&usqp=CAU"
              alt="Code"
            />
            <div className="container">
              <h4>Bhushan Khachane</h4>
              <p>Web Developer</p>
              <p>Backend and Testing<br/><span style={{color:"red"}}>Team Leader</span></p>
              <p>bhushankhachane.23@gmail.com</p>
              <p>
                <button className="btn-success">Contact</button>
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <img
              src="https://png.pngtree.com/png-vector/20190118/ourlarge/pngtree-vector-female-student-icon-png-image_326761.jpg"
              alt="Code"
            />
            <div className="container">
              <h4>Vrushali Patil</h4>
              <p>Web Developer</p>
              <p>Backend and Testing</p>
              <p>pvrushali416@gmail.com</p>
              <p>
                <button className="btn-success">Contact</button>
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <img
              src="https://png.pngtree.com/png-vector/20190118/ourlarge/pngtree-vector-female-student-icon-png-image_326761.jpg"
              alt="Code"
            />
            <div className="container">
              <h4>Vaishnavi Naphade</h4>
              <p>Web Developer</p>
              <p>Frontend and Desgining</p>
              <p>vaishnavinapahde@gmail.com</p>
              <p>
                <button className="btn-success">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutus;
