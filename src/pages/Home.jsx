import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import FormInput from '../components/FormInput'
import { Formik } from 'formik'

import { object, string, number, date, InferType } from 'yup';
import Header from '../layouts/Header';
import { AuthenticationContext } from '../context/authentication.context';
import { UserContext } from '../context/user.context';

export default function Home() {

    const navigate = useNavigate()
    const params = useParams()

    const [user, setUser] = useState({

    })

    const { isAuthenticated, setIsAuthenticated, logout } = useContext(AuthenticationContext)

    const { contextUser } = useContext(UserContext)

    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")


    useEffect(() => {
        console.log(user, "user")
    }, [user])

    const location = useLocation()
    console.log(params, "params")
    console.log(location.search.split("="), "location")

    const handleTerms = () => {
        //logic
        navigate("/term", {
            replace: true,
            state: {
                hello: "hello"
            }
        })
    }


    const handleSubmit = () => {
        console.log(user)
        // console.log(firstName, "firstName")
        // console.log(lastName, "lastName")
        // console.log(email, "email")
        // console.log(password, "password")

        //API call rest work

    }

    const add = (...values) => {
        debugger
        console.log(values)
    }




    // const handleChange = (event) => {


    //     setUser(prevState => { return { ...prevState, [event.target.name]: event.target.value } })

    // }
    return (
        <div>
            <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            <Link to='/home'>Home</Link>
            <Link to='/privacy-policy'>Privacy policy</Link>
            <Link to='/term'>Term</Link>

            Home




            <button onClick={handleTerms}>Terms</button>
            <br />

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

                    {JSON.stringify(contextUser)}
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
