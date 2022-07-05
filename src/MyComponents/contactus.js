import React from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm("gmail","template_gaiux3o", e.target,"user_x0boh8Smwzx1UQcF9qcME").then(res =>{
            console.log(res.text);
        }).catch(err => console.log(err.text));
        e.target.reset()
    }
    return (
        <div className="container border" style={{marginTop:"150px",marginBottom:"150px", width:'50%',
        backgroundImage:`url('https://th.bing.com/th/id/OIP.8AESL__rKNk4q0NUsIuyPgHaF7?pid=ImgDet&rs=1')`,
        backgroundPosition:'center',
        backgroundSize:'cover'
        }}>
            <h1 style={{marginTop:'25px', marginLeft:'180px'}}>Contact Form</h1>
            <form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
                <label>Full Name</label>
                <input type="text" name="name" className="form-control"/>
                <label>Email</label>
                <input type="email" name="email" className="form-control"/>
                <label>Mobile Number</label>
                <input type="text" name="mobile" className="form-control"/>
                <label>Message</label>
                <input type="text" name='message' rows='4'/>
                <input type="submit" value="Send" className="form-control btn btn-success"
                 style={{marginTop:"30px"}}
                />
            </form>
        </div>
    )
}
export default Contact;