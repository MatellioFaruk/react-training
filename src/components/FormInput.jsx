import React from 'react'

export default function FormInput({
    label,
    name,
    handleChange,
    type,
    value,
    error
}) {
    return (
        <><label>
            {label}
        </label>
            <input name={name} type={type} value={value} onChange={handleChange} />
            <small>
                {error}
            </small>
        </>
    )
}
