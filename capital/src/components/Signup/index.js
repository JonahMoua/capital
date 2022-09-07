import React from 'react'
import { Container, 
    FormContent, 
    FormInput, 
    FormLabel, 
    FormWrap,
    Icon,
    Form,
    FormButton,
    FormH1,
    Text,
    Text2
     } from './SignupElements'

export const SignUp = () => {
  return (
    <>
   <>
    <Container>
        <FormWrap>
            <Icon to='/'>Capital</Icon>
            <FormContent>
                <Form action='#'>
                    <FormH1>Create your Capital Account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Email Confirmation</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormLabel htmlFor='for'>Password Confirmation</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Text href='//www.google.com' target='_blank'>Sign up with a Google Account</Text>
                    <Text2 to='/signin'>Already Have an Account</Text2>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
    </>
  )
}

export default SignUp;