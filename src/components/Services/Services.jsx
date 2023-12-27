import React from 'react';
import Heading from "../Heading/Heading";
import { data} from "../../constants";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import "./Services.css";

const Services = () => {
  return (
    <div id="services" className="d-block pt-md-4">
      <Heading title="Services" text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include" />
      <div className="row">
        {data.ServicesData.map(({ titleone, titletwo , link, itemclass, imgURL }, index) => (
          <div className="col-lg-6 col-12" key={index}>
            <div className={`row ${itemclass}`}>
              <div className="col-md-6 box">
                    <div>
                      <span>{titletwo}</span>
                    </div>
                    <a href={link} alt={titleone} className='readmore'>
                      <BsFillArrowUpRightCircleFill /> Learn More
                    </a>
              </div>
              <div className='col-md-6 text-end'>
                <img src={imgURL} alt={titleone} className="img-fluid img-services" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
