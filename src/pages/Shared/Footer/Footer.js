import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="mt-5 footer">
      <div className="">
        <div className="row">
          <div className="col-md-4  ">
            <div className="first-cart ">
              <h1 className="text-warning">USEFUL-LINKS</h1>


              <a className="text-light fs-10 ankor" href="#">👉 Blogs</a> <br />
              <a className="text-light fs-10 ankor" href="#">👉Vising place</a> <br />
              <a className="text-light fs-10 ankor" href="#">👉gallary</a> <br />


            </div>
          </div>
          <div className="col-md-4 ">
            <h1 className="text-warning"  >Hotline</h1>
            <p> 👨‍🎨 Tourist-Guide: +8801823039800 <br />
              🖼 Package Details: +8801771241673 <br />
              🚖 Transports: +8801824666536
            </p>
          </div>
          <div className="col-md-4">
            <div className="second-part">
              <h1 className="text-warning" >CONTACT US</h1>

              <small className="mt-5">Office: 46 Mina Tower, Khilkhao Dhaka </small>
              <br />
              <small className="mt-3">Phone: 01789845674</small>
              <br />
              <small className="mt-3">Fax: 08 06 4752 1499</small>
              <br />
              <small className="mt-3">Email:bd.travell.com </small>
            </div>
          </div>
        </div>
        <hr className="text-warning" />
        <div className="botton text-center">
          <small className="text-warning" >2020  All Rights Reserved by</small>
          <br />
          <small> <a className="text-light copy" href="https://github.com/bappabappa">© Coder Bappa  </a></small>

        </div>
      </div>
    </div>)
};

export default Footer;
