import React, { useState, useEffect } from 'react'

const useForm = (schema, initialValues) => {
  const [values, setValues] = useState(initialValues)

  const setValue = (field, value) => setValues((old) => ({
      ...old,
      [field]: value
    }))

  const onChange = (field) => ({ target: { value }}) => setValue(field, value)

  const validate = () => schema.validate(values)

  return {
    values,
    setValue,
    setValues,
    onChange,
    validate
  }
}

export default useForm
