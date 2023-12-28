import React from 'react';
import './Footer.css';
import data  from '../../constants/data';
import images  from '../../constants/images';
import { BsFacebook, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <div className="row align-items-center">
        <div className="col-md-2 col-12">
          <img src={images.logoDark} alt='logo' className='img-fluid' />
        </div>
        <div className="col-md-8 col-12 ">
          <ul className="navbar-footer">
            {data.Menu.slice(0, -1).map((item, index) => (
              <li><a href='#home'>{item.text}</a></li>
            ))}
          </ul>
        </div>
        <div className="col-md-2 col-12 text-center text-md-end fs-4"><BsFacebook />  <BsTwitter /></div>
      </div>
      <div className="row">
        <div className="col-md-4 col-12">
          <ul className="infoContact">
            <li><span>Contact us:</span></li>
            <li>Email: info@nexusnova.com</li>
            <li>Phone: +91 1234567890</li>
            <li>Address:  2, Ovaripada, W E Highway, Dahisar, Mumbai, 12345</li>
          </ul>
        </div>
        <div className="col-md-8 col-12">
          <form className="row formNews">
            <div className="col-lg-6 col-12">
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="col-lg-6 col-12">
              <button type="submit" className="nexusBtn w-100">Subscribe to news</button>
            </div>
          </form>
        </div>
        <div className="rights">
          <p>© 2023 NexusNova. All Rights Reserved.</p>
          <p><a href='#home' alt="Privacy Policy">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
