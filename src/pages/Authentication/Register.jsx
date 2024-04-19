import { Formik } from 'formik'
import React from 'react'
import { object, string } from 'yup'
import FormInput from '../../components/FormInput'

export default function Register() {
    return (
        <div>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: ""
                }}
                validationSchema={
                    object({
                        firstName: string().required(),
                        lastName: string().required(),
                        email: string().required().email(),
                        password: string().required().min(1).max(10),
                    })


                }
                onSubmit={(values, actions) => {
                    console.log(values, actions)
                }}
            >
                {({
                    handleChange,
                    values,
                    errors,
                    handleSubmit
                }) => (<>


                    {JSON.stringify(values)}<br />
                    {JSON.stringify(errors)}<br />
                    <FormInput label={"First name"} name="firstName" type="text" value={values.firstName} error={errors.firstName} handleChange={handleChange} />
                    <br />
                    <FormInput label={"Last name"} name="lastName" type="text" value={values.lastName} error={errors.lastName} handleChange={handleChange} />
                    <br />
                    <FormInput label={"Email"} name="email" type="text" value={values.email} error={errors.email} handleChange={handleChange} />
                    <br />
                    <FormInput label={"Password"} name="password" type="password" value={values.password} error={errors.password} handleChange={handleChange} />
                    <button onClick={() => {
                        handleSubmit()
                    }}>Submit</button>
                </>)}
            </Formik>
        </div>
    )
}
