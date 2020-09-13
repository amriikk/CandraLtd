import React, { Component } from 'react';
import FormInput from '../Form-Input/Form-Input';
import CustomBtn from '../Custom-Btn/Custom-Btn';
import { SignInWithGoogle } from '../../Firebase/Firebase.Utils';

import './Sign-In.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({email: '', password:''})
    }

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account.</h2>
                <span>Please sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='email'
                        required />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required 
                    />
                    <div className='buttons'>
                        <CustomBtn type='submit'> Sign In </CustomBtn>
                        <CustomBtn onClick={SignInWithGoogle} isGoogleSignIn>
                            {' '}Sign in with Google{' '}
                        </CustomBtn>
                    </div>

                </form>
            </div>
        )
    }
};

export default SignIn;