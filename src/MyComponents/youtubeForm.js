import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function YoutubeForm() {

    const onSubmit = values => {
        console.log('Form data', values);
    }
    const validate = values => {
        //values.name values.email values.channel
        //errors.name errors.email errors.channel
        //errors.name = 'This field is required'

        let errors = {}

        if (!values.name) {
            errors.name = 'Required'
        }

        if (!values.email) {
            errors.email = 'Required'
        }
        if (!values.channel) {
            errors.channel = 'Required'
        } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
            errors.email = 'Invalid email format'
        }

        return errors;
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email Format').required('Required'),
        channel: Yup.string().required('Required')
    })
    const initialValues = {
        name: '',
        email: '',
        channel: ''

    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
        // onSubmit: values => {
        //     console.log('Form data', values);
        // },
        // validate: values => {
        //     //values.name values.email values.channel
        //     //errors.name errors.email errors.channel
        //     //errors.name = 'This field is required'

        //     let errors = {}

        //     if (!values.name) {
        //         errors.name = 'Required'
        //     }

        //     if (!values.email) {
        //         errors.email = 'Required'
        //     }
        //     if (!values.channel) {
        //         errors.channel = 'Required'
        //     }else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email))
        //     {
        //             errors.email = 'Invalid email format'
        //     }

        //     return errors;
        // }
    })

    console.log("Visited Fields ", formik.touched);
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        id='name' name='name'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.name} />
                    {formik.touched.name && formik.errors.name ? <div className="error" >{formik.errors.name}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor="email">E-Mail</label>
                    <input type="text"
                        id='email'
                        name='email'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email} />
                    {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                </div>
                <div className='form-control'>

                    <label htmlFor="channel">Channel</label>
                    <input type="channel"
                        id='channel' name='channel'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange} value={formik.values.channel} />
                    {formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm
