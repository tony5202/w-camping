import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import FormInput from '@/components/form/FormInput'
import { SubmitButton } from '@/components/form/Buttons'
import Formcontainer from '@/components/form/Formcontainer'

const createprofileAction=async(prevSate:any,formData:FormData)=>{
'use server'
const firstname=formData.get('firstName')as string;
return {message:'Create Sususus'}
}
const CreateProfile = () => {
  return <section>
    <h1 className='text-2xl font-semibold mb-8 capitalize'>New User</h1>
    <div className='mb-2'>
    <Formcontainer action={createprofileAction}>

           <div className='grid md:grid-cols-2 gap-4 mt-4'>
             <FormInput name='firstName' label='First Name' type='text'  placeholder='First Name'/>
            <FormInput name='lastName' label='Last Name ' type='text' placeholder='Last name'  />
            <FormInput name='username' label='username  ' type='text' placeholder='username'  />
           </div>
              <SubmitButton text='create profil' size='lg'/>
    </Formcontainer>
       
      
    </div>
    
  </section>
}

export default CreateProfile