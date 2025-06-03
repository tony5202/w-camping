'use client'
import { SignOutButton, useClerk } from '@clerk/nextjs'
import { toast } from "sonner"

const SingOutlink = () => {
    const {signOut}=useClerk()



    const handleLogout=async()=>{
        await signOut()
      toast.success("LogOut successully.")

    }
  return (
   <SignOutButton>
    <button className=''
    
    onClick={handleLogout}>LogOut</button>
   </SignOutButton>
  )
}

export default SingOutlink