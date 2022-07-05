import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useDispatch, useSelector } from 'react-redux'
import contactAction from '../redux/action/contsctAction'

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhone] = useState("");
    const [comments, setComment] = useState("");

    const dispatch = useDispatch();
    const responsedata = useSelector((state) => state.Reducer.isResponse)
    const nameHandler = (e) => {
        setName(e.target.value)
    };
    const emailHandler = (e) => {
        setEmail(e.target.value)
    };
    const phoneHandler = (e) => {
        setPhone(e.target.value)
    };
    const commentHandler = (e) => {
        setComment(e.target.value)
    };

    const clickhandler = (e) => {
        e.preventDefault();
        const finaldata = {
            name: name,
            email: email,
            phonenumber: phonenumber,
            comments: comments
        }
        dispatch(contactAction(finaldata))
    }
    if(responsedata){
        alert("Your response has been submitted !!")
    }
    return (
        <>
            <div className="contact">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        {/* <Form onSubmit={""}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control name="fullname" value={"fullname"} onChange={(e) => nameHandler(e)} placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Phone</Form.Label>
                                <Form.Control name="phonenumber" value={"phonenumber"} onChange={(e) => emailHandler(e)} placeholder="Mobile Number" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="emailaddress" value={"emailaddress"} onChange={(e) => phoneHandler(e)} placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Comment </Form.Label>
                                <Form.Control name="comment" value={"comments"} onChange={(e) => commentHandler(e)} as="textarea" rows={3} />
                            </Form.Group>
                            <div className="col-12">
                                <button type="submit" class="btn btn-outline-primary mb-3" onClick={(e) => {clickhandler(e)}}>Confirm identity</button>
                            </div>
                        </Form> */}
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => emailHandler(e)}  />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter Your Name" onChange={(e) => nameHandler(e)}  />
                                <Form.Text className="text-muted">
                                    We'll never share your name with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="phonenumber" placeholder="Enter Yoyr Number" onChange={(e) => phoneHandler(e)} />
                                <Form.Text className="text-muted">
                                    We'll never share your Number with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Comments</Form.Label>
                                <Form.Control type="comments" placeholder="Enter Comments" onChange={(e) => commentHandler(e)} />
                                
                            </Form.Group>
                            
                            <div className="col-12">
                                <button type="submit" class="btn btn-outline-primary mb-3" onClick={(e) => {clickhandler(e)}}>Confirm identity</button>
                            </div>
                        </Form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact
