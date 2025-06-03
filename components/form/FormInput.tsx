import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
  type FormInputProps={
      name: string
  type: string
  label?: string
  defaultValue?: string
  placeholder?: string
    }
const FormInput = (props:FormInputProps) => {
  const{name,label,defaultValue,placeholder,type}=props
  return (
   <div className='mb-2'>

            <Label htmlFor={name}>{label}</Label>
            <Input 
            name={name}
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}

            />
            </div>
  )
}

export default FormInput