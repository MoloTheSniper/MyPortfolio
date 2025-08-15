import React from 'react'
import '../../App.css'
import { IoIosCall } from "react-icons/io";
import Swal from 'sweetalert2'
const Contact = () => {

  //code from web3forms.com
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

      //SweetAlert2Show success message
      Swal.fire({
        title: "Success!",
        text: "Your email has been sent!",
        icon: "success"
      });
    }
  };

  return (
    <div className="container">
      <section className="contact">
        <form onSubmit={onSubmit}>
          <h2>Contact Form</h2>
          <div className='input-box'>
            <label>Full Name</label>
            <input type='text' className='field' placeholder='Enter your name' name='name' required/>
          </div>

          <div className='input-box'>
            <label>Email Address</label>
            <input type='email' className='field' placeholder='Enter your email' name ='email'required/>
          </div>

          <div className='input-box'>
            <label>Your Message</label>
            <textarea name ='message' className='field message' placeholder='Enter your message' required></textarea>
          </div>
          <button type ="submit">Send Message</button>

        </form>
      </section>
    </div>
  )
}

export default Contact