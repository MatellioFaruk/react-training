import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import FormInput from '../components/FormInput'

export default function Home() {

    const navigate = useNavigate()
    const params = useParams()

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

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



    const handleChange = (event) => {


        setUser(prevState => { return { ...prevState, [event.target.name]: event.target.value } })

    }
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/privacy-policy'>Privacy policy</Link>
            <Link to='/term'>Term</Link>

            Home




            <button onClick={handleTerms}>Terms</button>
            <br />

            <FormInput label={"First name"} name="firstName" type="text" handleChange={handleChange} />
            <br />
            <FormInput label={"Last name"} name="lastName" type="text" handleChange={handleChange} />
            <br />
            <FormInput label={"Email"} name="email" type="text" handleChange={handleChange} />
            <br />
            <FormInput label={"Password"} name="password" type="password" handleChange={handleChange} />
            <button onClick={() => {
                handleSubmit()
                add([{ 1: "hello" }, { 2: "hello" }])
            }}>Submit</button>
        </div>
    )
}
