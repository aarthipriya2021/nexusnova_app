import React from 'react';
import Heading from '../Heading/Heading';
import './Contact.css';

const Contact = () => {
  return (
    <div classNameName="sectionPadding">
      <Heading title="Contact Us" text="Connect with Us: Let's  Discuss Your Digital Marketing Needs" />

      <div className="contact" id="quote">
        <div className="row">
          <div className="col-md-6 col-12">
            <form>
              <div className='form-check form-check-inline'>
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label" for="inlineRadio1">Say Hi</label>
              </div>
              <div className='form-check form-check-inline'>
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label" for="inlineRadio2">Get a Quote</label>
              </div>
              <div className="formGroup">
                <label>Name*</label>
                <input className="form-control" type="text" placeholder="Name" />
              </div>
              <div className="formGroup">
                <label>Email*</label>
                <input className="form-control" type="email" placeholder="Email" />
              </div>
              <div className="formGroup">
                <label for="exampleFormControlTextarea1">Message*</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" class="nexusBtn w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
