import {z,ZodSchema}from 'zod'
import { object } from 'zod/v4'

export const profilSchema=z.object({
    firstName:z.string().min(2,{message:'h d2 ty porn nah'}),
  
    lastName:z.string().min(2,{message:'h d2 ty porn nah'}),
      userName:z.string().min(2,{message:'h d2 ty porn nah'}),
})







export const validateWithzod=<T>(schema:ZodSchema<T>,data:unknown):T=>{
    const result=schema.safeParse(data)
    if(!result.success){
        const error=  result.error?.errors.map((error)=>error.message)
        throw new Error(error.join(','))
    }
    return result.data
}
