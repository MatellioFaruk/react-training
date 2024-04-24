import React from 'react'
import styled from 'styled-components'

const FormInputContainer = styled.div`
border:1px solid blue;
.hello{
    color:green;
    .hi{
        color:orange
    }

}

`


const Input = styled.input`
border: 1px solid orange;
color:${(props) => props.color};

`

export default function FormInput({
    label,
    name,
    handleChange,
    handleBlur,
    type,
    value,
    error
}) {
    return (
        <FormInputContainer className='container'>

            <div className='hello'>
                Hello
                <div className='hi'>Hiiii</div>
            </div>
            <label className="hello">
                {label}
            </label>
            <br />
            <Input
                color="green"
                name={name}
                type={type}
                value={value}
                onBlur={handleBlur}
                onChange={handleChange} />
            <small>
                {error}
            </small>
        </FormInputContainer>
    )
}
