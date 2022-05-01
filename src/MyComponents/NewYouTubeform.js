import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function NewYouTube() {

    const onSubmit = values => {
        console.log('Form data', values);
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
    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,

    //     validationSchema

    // })

    // console.log("Visited Fields ", formik.touched);
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form >
                <div className='form-control'>
                    <label htmlFor="name">Name</label>
                    <Field type="text"
                        id='name' name='name'

                    />
                    {/* {formik.touched.name && formik.errors.name ? <div className="error" >{formik.errors.name}</div> : null} */}
                    <ErrorMessage name="name" />
                </div>

                <div className='form-control'>
                    <label htmlFor="email">E-Mail</label>
                    <Field type="text"
                        id='email'
                        name='email'
                    // {...formik.getFieldProps('email')} =
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    // value={formik.values.email}
                    />
                    <ErrorMessage name="email" />
                </div>
                <div className='form-control'>

                    <label htmlFor="channel">Channel</label>
                    <Field type="channel"
                        id='channel' name='channel'

                    />
                    <ErrorMessage name="channel" />
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default NewYouTube

