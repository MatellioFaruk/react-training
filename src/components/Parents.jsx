import React, { useEffect, useState } from 'react'
import Child from './Child'
import Hello from './Hello';

export default function Parents() {
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState("Faruk");

    const handleNameChange = () => {
        setName("Khan")
    }

    //component mount
    useEffect(() => {
        console.log("Change in counter and also name change")
    }, [counter, name])

    useEffect(() => {
        console.log("In use effect parent 2")
    })



    const handleIncrement = () => {
        setCounter(prevState => prevState + 1)
    }

    const handleDecrement = () => {
        setCounter(prevState => prevState - 1)
    }



    console.log("Parent render")

    return (
        <div>
            Parent {name}
            <button onClick={handleDecrement}>
                -
            </button>
            <p>{counter}</p>
            <button onClick={handleIncrement}>
                +
            </button >

            <Child counter={{ counter, name }} name={name} >
                <Hello />
            </Child>
            <button onClick={handleNameChange}>Name change</button>
        </div>
    )
}
