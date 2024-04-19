import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import FormInput from '../components/FormInput'
import { Formik } from 'formik'

import { object, string, number, date, InferType } from 'yup';
import Header from '../layouts/Header';
import { AuthenticationContext } from '../context/authentication.context';
import { UserContext } from '../context/user.context';
import { useDispatch, useSelector } from 'react-redux';


export default function Home() {

    const navigate = useNavigate()
    const params = useParams()
    const counter = useSelector(state => state.counter.counter)
    const dispatch = useDispatch()

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



            Home




            <button onClick={handleTerms}>Terms</button>
            <br />



        </div >
    )
}
