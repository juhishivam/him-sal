import React from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
    
    return (
        <div className="container border" style={{marginTop:"150px",marginBottom:"150px", width:'50%',
        backgroundImage:`url('https://th.bing.com/th/id/OIP.8AESL__rKNk4q0NUsIuyPgHaF7?pid=ImgDet&rs=1')`,
        backgroundPosition:'center',
        backgroundSize:'cover'
        }}>
            <h1 style={{marginTop:'25px', marginLeft:'180px'}}>Contact Form</h1>
            <form  className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
                <label >Full Name</label>
                <input placeholder='Full Name' type="text" name="name" className="form-control"/>
                <label>Email</label>
                <input placeholder='Your Email' type="email" name="email" className="form-control"/>
                <label>Mobile Number</label>
                <input placeholder='Your Mobile num...' type="text" name="mobile" className="form-control"/>
                <label>Message</label>
                <input placeholder='Reason For Contacting' type="text" name='message' rows='4' className='form-control'/>
                <input  type="submit" value="Send" className="form-control  btn btn-success"
                 style={{marginTop:"20px",width:165,marginLeft:"120px"}}
                 
                />
                
            </form>
        </div>
    )
}
export default Contact;