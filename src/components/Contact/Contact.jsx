import React from 'react'
import "./Contact.css"
import theme_pattern from '../../assets/theme_pattern.svg'
import mail from '../../assets/mail_icon.svg'
import loc from '../../assets/location_icon.svg'
import call from '../../assets/call_icon.svg'


const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "5a04ebb3-3d05-4a6d-8a94-9a1966509cb0");
    
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
          
          alert(res.message)
        }
      };
    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Ping me </h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Im currently seeking Data Analyst roles, open for hiring!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                             <img src={mail} /> <p>balajipothala213@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                        <img src={call} /> <p>7815943275</p>        
                        </div>
                        <div className="contact-detail">
                        <img src={loc} /> <p>kakinada, Andhra Pradesh</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor=''>Your Name</label>
                    <input type="text" placeholder='Enter your name!' name='name'/>
                    <label htmlFor=''>Your Email</label>
                    <input type="email" placeholder='Enter your email!' name='mail'/>
                    <label htmlFor=''>Write Your Message</label>
                    <textarea name="message" rows='8' placeholder='Enter your message!'></textarea>
                    <button type='submit' className="contact-submit">Submit</button>

                </form>
            </div>
            <h3>Made By Sai Manohar. <br /> Reach me out at saimanohar.velaga007@gmail.com <br /> <a href="">github:</a></h3>
            
        </div>
    )
}

export default Contact