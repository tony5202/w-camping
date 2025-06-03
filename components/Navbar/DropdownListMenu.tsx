import React from 'react'
import { AlignLeft, UserIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button';
import Link from 'next/link';
import { links } from '@/uitlls/links';
import SingOutlink from './SingOutlink';
import { SignedIn,SignedOut ,SignInButton,SignUpButton} from '@clerk/nextjs';
const DropdownListMenu = () => {
  return (
    
      
<div className='flex flex-row'>

    <DropdownMenu>
  <DropdownMenuTrigger asChild>
          <Button>
     <AlignLeft />
  <UserIcon/>
        </Button>
    </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
 

    <DropdownMenuSeparator />
       <SignedOut>

<DropdownMenuItem>
   

    <SignInButton mode='modal'>

    <button>Login</button>
    </SignInButton>
</DropdownMenuItem>


<DropdownMenuItem>
     <SignUpButton mode='modal'>
        <button>Register</button>
    </SignUpButton>
</DropdownMenuItem>

    </SignedOut>

    <SignedIn>
    {
        links.map((item,index)=>{
            return   <DropdownMenuItem key={index}>
                <Link href={item.href}>{item.label}</Link>
            </DropdownMenuItem>

})
}


 <SingOutlink/>

</SignedIn>
   
  
    
  </DropdownMenuContent>
</DropdownMenu>
</div>

  )
}

export default DropdownListMenu