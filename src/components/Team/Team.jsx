import React from 'react';
import Heading from '../Heading/Heading';
import data from '../../constants/data';
import { BsLinkedin } from 'react-icons/bs';
import './Team.css';

const Team = () => {
  return (
    <div className="sectionPadding">
      <Heading title="Team" text="Meet the skilled and experienced team behind our successful digital marketing strategies" />
      <div className="row">
        {data.Team.map(({ name, position, info, foto, linkedin }, index) => (
          <div className="col-lg-4 col-md-6 col-12">
            <div className="cardTeam" key={index}>
              <div className="cardTeamHeader">
                <img src={foto} alt={name} />
                <p>
                  <span>{name}</span>{position}
                </p>
                <a href={linkedin} alt={`LinkedIn + ${name}`}><BsLinkedin /></a>
              </div>
              <p>{info}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex mt-2 justify-content-md-end justify-content-center">
        <button className="nexusBtn">See all team</button>
      </div>
    </div>
  )
}

export default Team
