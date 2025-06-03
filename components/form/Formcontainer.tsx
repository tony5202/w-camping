'use client'
import { useActionState } from "react"
import { useEffect } from "react"
import { toast } from "sonner"

const initilstate={
    message:''
}
type actionFuntion=(
    prevSate:any,
    formData:FormData
)=>Promise<{message:string}>

const Formcontainer = ({action,children}:{action:actionFuntion, children:React.ReactNode}) => {
   
    const [state,formAction]=useActionState(action, initilstate)

useEffect(()=>{
if(state.message){
    toast.success(state.message)
}
},[state])



  return (
    <form action={formAction}>
        {children}
    </form>
  )
}

export default Formcontainer