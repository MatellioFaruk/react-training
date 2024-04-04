import React, { useEffect } from 'react'

export default function Child({ counter, children }) {
    console.log("Child render")

    useEffect(() => {
        console.log("Child component useEffect counter change")

    }, [counter])

    useEffect(() => {
        console.log("In use effect child")
    })
    return (
        <div className='xyz'>Child {children}</div>
    )
}
