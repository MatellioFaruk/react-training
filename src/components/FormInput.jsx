import React from 'react'

export default function FormInput({
    label,
    name,
    handleChange,
    type
}) {
    return (
        <><label>
            {label}
        </label>
            <input name={name} type={type} onChange={handleChange} /></>
    )
}
