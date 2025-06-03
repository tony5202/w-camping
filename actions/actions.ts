'use server'

import { profilSchema, validateWithzod } from "@/uitlls/schame"

const rendererorr=(error:unknown):{message:string}=>{
    return{
        message:error instanceof Error? error.message:'Eroorrr!!!'
    }

}
export const createprofileAction=async(prevSate:any,formData:FormData)=>{

try {
    const rawData=Object.fromEntries(formData)
const validateField=validateWithzod(profilSchema,rawData)
return {message:'Create Sususus'}
} catch (error) {
    return rendererorr(error)
}
}