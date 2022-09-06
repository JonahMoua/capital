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
        Text2 } from './SignElements'

const SignIn = () => {
  return (
    <>
    <Container>
        <FormWrap>
            <Icon to='/'>Capital</Icon>
            <FormContent>
                <Form action='#'>
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot Password</Text>
                    <Text2>Create an Account</Text2>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default SignIn