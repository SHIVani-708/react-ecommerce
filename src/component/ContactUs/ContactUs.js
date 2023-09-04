import React, { Fragment, useRef } from "react";
import './ContactUs.css'

function ContactUs(props) {
  const fname=useRef('');
  const lname=useRef('');
  const email=useRef('');
  const num=useRef('');
  const msg=useRef('');

  function SubmitHandler(event){
    event.preventDefault();

    const contact={
        fname: fname.current.value,
        lname: lname.current.value,
        email: email.current.value,
        num: num.current.value,
        msg: msg.current.value
    }

    props.onAddContact(contact);
    document.getElementById('addForm').reset();
  }
  return (
    <Fragment>
      <div class="contact_us_2">
        <div class="responsive-container-block big-container">
          <div class="blueBG"></div>
          <div class="responsive-container-block container">
            <form id="addForm" class="form-box" onSubmit={SubmitHandler}>
              <div class="container-block form-wrapper">
                <p class="text-blk contactus-head">Get in Touch</p>
                <div class="responsive-container-block">
                  <div
                    class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
                    id="i10mt"
                  >
                    <p class="text-blk input-title">FIRST NAME</p>
                    <input
                      class="input"
                      id="ijowk"
                      name="FirstName"
                      placeholder="Please enter first name..."
                      ref={fname}
                    />
                  </div>
                  <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p class="text-blk input-title">LAST NAME</p>
                    <input
                      class="input"
                      id="indfi"
                      name="Last Name"
                      placeholder="Please enter last name..."
                      ref={lname}
                    />
                  </div>
                  <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p class="text-blk input-title">EMAIL</p>
                    <input
                      class="input"
                      id="ipmgh"
                      name="Email"
                      placeholder="Please enter email..."
                      ref={email}
                    />
                  </div>
                  <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p class="text-blk input-title">PHONE NUMBER</p>
                    <input
                      class="input"
                      id="imgis"
                      name="PhoneNumber"
                      placeholder="Please enter phone number..."
                      ref={num}
                    />
                  </div>
                  <div
                    class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                    id="i634i"
                  >
                    <p class="text-blk input-title">WHAT DO YOU HAVE IN MIND</p>
                    <textarea
                      class="textinput"
                      id="i5vyy"
                      placeholder="Please enter query..."
                      ref={msg}
                    ></textarea>
                  </div>
                </div>
                <button class="submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ContactUs;
