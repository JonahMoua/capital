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
        Text2 } from './SignElements'

const SignIn = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Login = e => {
    e.preventDefault();

    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            navigate('/')
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
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required onChange={e => setEmail(e.target.value)}/>
                    <FormLabel htmlFor='for' >Password</FormLabel>
                    <FormInput type='password' required onChange={e => setPassword(e.target.value)}/>
                    <FormButton type='submit' onClick={Login}>Continue</FormButton>
                    <Text>Forgot Password</Text>
                    <Text2 to='/signup'>Create an Account</Text2>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  );
};

export default SignIn;