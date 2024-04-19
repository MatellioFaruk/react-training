import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthenticationContext } from '../../context/authentication.context'
import { Formik } from 'formik'
import FormInput from '../../components/FormInput'
import { loginWithRedux } from '../../redux/slices/auth.slice'
import { useDispatch } from 'react-redux'

export default function Login() {
    const { login } = useContext(AuthenticationContext)

    const dispatch = useDispatch()
    return (
        <div className='container'>
            <div className='row card p-3'>


                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    onSubmit={(values, actions) => {
                        console.log(values, actions)
                        dispatch(loginWithRedux())
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (<>
                        <div className='col-12'>
                            <FormInput
                                id="email"
                                name="email"
                                label="Email"
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                value={values.email}
                                error={errors.email} />
                        </div>
                        <div className='col-12'>
                            <FormInput
                                id="password"
                                name="password"
                                label="Password"
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                value={values.password}
                                error={errors.password} />
                        </div>
                        <div className='col-12'>
                            <button className='btn btn-primary mt-2' onClick={() => {
                                handleSubmit()

                            }}>
                                Login
                            </button>
                        </div>

                    </>)}

                </Formik>


            </div>
        </div>
    )
}
