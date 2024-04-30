import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import FormInput from '../components/FormInput'
import { Formik } from 'formik'

import { object, string, number, date, InferType } from 'yup';
import Header from '../layouts/Header';
import { AuthenticationContext } from '../contexts/authentication.context';
import { UserContext } from '../contexts/user.context';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getUsers } from '../services/users.service';
import { MemoTerm } from './Term';




export default function Home() {
    const [user, setUser] = useState({})
    const [users, setUsers] = useState([])
    const [counter, setCounter] = useState(0)
    // const [name, setName] = useState("")

    const nameRef = useRef()
    const calendarRef = useRef()

    const handleSub = () => {
        console.log(nameRef)
    }

    // const calculate = useCallback((num) => {
    //     console.log("Calculating")
    //     for (let i = 0; i < 50000; i++) {
    //         num = num + 1
    //     }

    //     return num
    // }, [])





    //  const value = useMemo(() => calculate(counter), [counter])

    useEffect(() => {
        getUsers().then(response => {
            console.log("getUsers", response)
            setUsers(response.data)
        }).catch(error => {
            console.log(error.response)
        })
    }, [])



    const handleClickOnUser = (userId) => {
        getUser(userId).then(response => {
            setUser(response.data)
        })
    }


    return (
        <div>


            <h1>Users List</h1>
            {users.map(user => (
                <p onClick={() => {
                    handleClickOnUser(user.id)
                }}>{user.name}</p>
            ))}

            {/* use memo value:-{value} */}

            <input ref={nameRef} />


            <button onClick={() => {
                nameRef.current.focus()
            }} > Focus on input</button>
            <button onClick={handleSub}>Submit</button>

            <button onClick={() => setCounter(prev => prev - 1)}>-</button><br />
            {/* counter value :- {counter} */}
            <br />
            <button onClick={() => setCounter(prev => prev + 1)}>+</button>
            {/* 
            <MemoTerm name={name} counter={counter} /> */}
        </div >
    )
}
