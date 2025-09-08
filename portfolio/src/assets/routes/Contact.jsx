import React from 'react';
import '../../App.css';
import { IoIosCall } from "react-icons/io";
import Swal from 'sweetalert2';
import call from '../../assets/GIFS/CALL1.gif';
import paper1 from '../../assets/images/paper2.png';

const Contact = () => {
  // Form submission
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "f6134abf-3e77-4b61-8988-96bc01305d8c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      Swal.fire({
        title: "Success!",
        text: "Your email has been sent!",
        icon: "success"
      });
    }
  };

  return (
    <>
     <h1 className='center-text'>Contact</h1>
    <div className="container">
      <img
        src={call}
        alt="Calling"
        className="image"
        style={{paddingbottom: "50px"}}
      />

      <div className='box glow-card'>
        <section className="contact">
          <form onSubmit={onSubmit}>
            <h1>Lets talk!</h1>

            <div className='input-box'>
              <label style={{  color: "#1f4eb1"}}>Full Name</label>
              <input
                type='text'
                className='field'
                placeholder='Enter your name'
                name='name'
                required
              />
            </div>

            <div className='input-box'>
              <label style={{  color: "#1f4eb1"}}>Email Address</label>
              <input
                type='email'
                className='field'
                placeholder='Enter your email'
                name='email'
                required
              />
            </div>

            <div className='input-box'>
              <label style={{  color: "#1f4eb1"}}>Your Message</label>
              <textarea
                name='message'
                className='field message'
                placeholder='Enter your message'
                required
              ></textarea>
            </div>

            <button type="submit" className="switcher" style={{color: "black"}}>Send Message</button>
          </form>
        </section>
      </div>
    </div>
    </>
  );
};

export default Contact;
