import React from 'react';
import Heading from "../Heading/Heading";
import IconScroll from '../IconScroll/IconScroll';
import data from '../../constants/data';
import { FiArrowUpRight } from "react-icons/fi";
import "./CaseStudies.css"

const CaseStudies = () => {
  return (
    <div className='sectionPadding' id="use-cases">
      <Heading title="Case Studies" text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" />

      <div className="caseStudies">
          {data.CaseStudies.map(({text, link}, index) => (
            <div key="index" className="case-studies-item">
              <p>{text}</p>
              <a href={link} alt="Learn More">Learn More <FiArrowUpRight /> </a>
            </div>
          ))}
      </div>
      <IconScroll />
    </div>
  )
}

export default CaseStudies
