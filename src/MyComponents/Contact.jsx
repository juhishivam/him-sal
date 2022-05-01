import React from 'react'
import Form from 'react-bootstrap/Form'
import fetch from 'isomorphic-fetch'
class Contact extends React.Component {

    constructor(){
        super()
        this.state={
            contacts:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:1337/contactuses').then((res) => {
            if(res.status >= 400){
                throw new Error("Bad response from server")
            }
            return res.json()
        }).then((contacts) =>{
            this.setState({contacts:contacts})
        })
    }

    // const [data, setData] = useState({
    //     fullname: "",
    //     phonenumber: "",
    //     emailaddress: "",
    //     comment: ""
    // })

    // const InputEvent = (event) => {
    //     const { name, value } = event.target;

    //     setData((preVal) => {
    //         return {
    //             ...preVal,
    //             [name]: value
    //         }
    //     })
    // }

    // const formSubmit = (e) => {
    //     e.preventDefault();

    // }
    render(){
    return (
        <>
            <div className="contact">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <Form onSubmit={""}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control name="fullname" value={"fullname"} onChange={InputEvent} placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control name="phonenumber" value={"phonenumber"} onChange={InputEvent} placeholder="Mobile Number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="emailaddress" value={"emailaddress"} onChange={InputEvent} placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Comment </Form.Label>
                                <Form.Control name="comment" value={"comment"} onChange={InputEvent} as="textarea" rows={3} />
                            </Form.Group>
                            <div className="col-12">
                                <button type="submit" class="btn btn-outline-primary mb-3">Confirm identity</button>
                            </div>
                        </Form>
                    </div>

                </div>
            </div>
        </>
    )
}
}
export default Contact
