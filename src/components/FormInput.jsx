import React from 'react'

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
        <>
            <label>
                {label}
            </label>
            <br />
            <input name={name} type={type} value={value} onBlur={handleBlur} onChange={handleChange} />
            <small>
                {error}
            </small>
        </>
    )
}
