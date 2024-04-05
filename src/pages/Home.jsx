import React from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate()
    const params = useParams()

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
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/privacy-policy'>Privacy policy</Link>
            <Link to='/term'>Term</Link>

            Home

            <button onClick={handleTerms}>Terms</button>
        </div>
    )
}
