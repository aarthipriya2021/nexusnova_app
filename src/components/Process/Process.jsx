import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import data from '../../constants/data';
import Heading  from '../Heading/Heading';
import './Process.css';

const Process = () => {
  return (
    <div className="section-padding" id="process">
      <Heading title="Our Working Process " text="Step-by-Step Guide to Achieving Your Business Goals" />
      <Accordion>
        {data.WorkingProcess.map((item, index) => (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>
                <div>
                  <span>{index + 1}</span> {item.title}
                </div>
              </Accordion.Header>
              <Accordion.Body><p>{item.description}</p></Accordion.Body>
            </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

export default Process;