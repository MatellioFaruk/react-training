import { FieldArray, Formik } from 'formik'
import React from 'react'
import { array, boolean, object, string } from 'yup'
import FormInput from '../../components/FormInput'
import FormCheckbox from '../../components/FormCheckbox'

export default function Register() {
    return (
        <div className='container'>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    hobbies: ["", ""],
                    banks: [{ name: "", IFSC: "" }],
                    isAccepted: false,
                    step: 1
                }}
                validationSchema={
                    object({
                        firstName: string().required(),
                        lastName: string().required(),
                        email: string().required().email(),
                        password: string().required().min(1).max(10),
                        hobbies: array(string().required("hobby is required.")).min(1),
                        banks: array(
                            object({
                                name: string().required("name is required."),
                                IFSC: string().required("IFSC code is required")
                            })
                        ).min(1),
                        isAccepted: boolean().oneOf([true], "Please accept Privacy policy.")
                    })


                }
                onSubmit={(values, actions) => {
                    console.log(values, actions)
                }}
            >
                {({
                    handleChange,
                    values,
                    errors,
                    handleSubmit,
                    setFieldValue,
                    setFieldTouched

                }) => (<>
                    <pre> {JSON.stringify(values, null, 4)}
                    </pre>
                    {JSON.stringify(errors)}
                    <FormInput
                        label={"First name"}
                        name="firstName"
                        type="text"
                        value={values.firstName}
                        error={errors.firstName}
                        handleChange={handleChange}
                    />

                    <FormCheckbox
                        name="isAccepted"
                        label="Privacy & policy"
                        value={values.isAccepted}
                        handleChange={setFieldValue}
                        error={errors.isAccepted}
                    />

                    <br />
                    <FormInput
                        label={"Last name"}
                        name="lastName"
                        type="text"
                        value={values.lastName}
                        error={errors.lastName}
                        handleChange={handleChange}
                    />
                    <br />      <hr />

                    <FieldArray
                        name='hobbies'
                        render={(fieldArrayProps) => {
                            console.log(fieldArrayProps)
                            return (
                                <>
                                    {values.hobbies.map(((hobby, index) => (
                                        <>
                                            <FormInput
                                                label={`Hobby ${index + 1}`}
                                                name={`hobbies.${index}`}
                                                type="text"
                                                value={values.hobbies && values.hobbies[index]}
                                                error={errors.hobbies && errors.hobbies[index]}
                                                handleChange={handleChange}
                                            />
                                            <br />

                                            <button onClick={() => {
                                                fieldArrayProps.remove(index)
                                            }}>delete</button>
                                        </>
                                    )))}
                                    <button onClick={() => {
                                        fieldArrayProps.push("")
                                    }}>+</button>
                                </>
                            )
                        }}
                    />

                    <hr />

                    <FieldArray
                        name='banks'
                        render={(fieldArrayProps) => {
                            console.log(fieldArrayProps)
                            return (
                                <>
                                    {values.banks.map(((bank, index) => (
                                        <>
                                            <FormInput
                                                label={`Bank ${index + 1} Name`}
                                                name={`banks.${index}.name`}
                                                type="text"
                                                value={values.banks && values.banks[index] && values.banks[index].name}
                                                error={errors.banks && errors.banks[index] && errors.banks[index].name}
                                                handleChange={handleChange}
                                            />
                                            <FormInput
                                                label={`IFC Code ${index + 1}`}
                                                name={`banks.${index}.IFSC`}
                                                type="text"
                                                value={values.banks && values.banks[index] && values.banks[index].IFSC}
                                                error={errors.banks && errors.banks[index] && errors.banks[index].IFSC}
                                                handleChange={handleChange}
                                            />
                                            <br />

                                            <button onClick={() => {
                                                fieldArrayProps.remove(index)
                                            }}>delete</button>
                                        </>
                                    )))}
                                    <button onClick={() => {
                                        fieldArrayProps.push({
                                            name: "",
                                            IFSC: ""
                                        })
                                    }}>+</button>
                                </>
                            )
                        }}
                    />
                    <FormInput
                        label={"Email"}
                        name="email"
                        type="text"
                        value={values.email}
                        error={errors.email}
                        handleChange={handleChange} />
                    <br />

                    <FormInput label={"Password"} name="password" type="password" value={values.password} error={errors.password} handleChange={handleChange} />
                    <br />
                    <button className='mt-3' onClick={() => {
                        handleSubmit()
                    }}>Submit</button>
                </>)}
            </Formik>
        </div>
    )
}
