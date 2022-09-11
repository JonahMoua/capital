import React, { useState } from 'react'
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
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

     const SignUp = () => {
    
        const navigate = useNavigate();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
    
    
        const register = e => {
            e.preventDefault();
    
            auth
                .createUserWithEmailAndPassword(email, password)
                .then((auth) => {
                    // it successfully created a new user with email and password
                    if (auth) {
                        navigate('/')
                    }
                })
                .catch(error => alert(error.message))
        }

    return (
   <>
    <Container>
        <FormWrap>
            <Icon to='/'>Capital</Icon>
            <FormContent>
                <Form action='#'>
                    <FormH1>Create your Capital Account</FormH1>
                    <FormLabel htmlFor='for' value={email} >Email</FormLabel>
                    <FormInput type='email' required onChange={e => setEmail(e.target.value)}/>
                    <FormLabel htmlFor='for'>Email Confirmation</FormLabel>
                    <FormInput type='email' required={email}/>
                    <FormLabel htmlFor='for' >Password</FormLabel>
                    <FormInput type='password' required value={password} onChange={e => setPassword(e.target.value)}/>
                    <FormLabel htmlFor='for'>Password Confirmation</FormLabel>
                    <FormInput type='password' required={password} />
                    <FormButton type='submit' onClick={register}>Continue</FormButton>
                    <Text href='//www.google.com' target='_blank'>Sign up with a Google Account</Text>
                    <Text2 to='/signin'>Already Have an Account</Text2>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  );
};
export default SignUp;