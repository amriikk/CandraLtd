import React, { Component } from 'react';
import CustomBtn from '../../components/Custom-Btn/Custom-Btn';
import FormInput from '..//Form-Input/Form-Input';
import { auth, createUserProfileDocument } from '../../Firebase/Firebase.Utils';

import './Sign-Up.scss';

class SignUp extends Component {
    constructor(){
      super();

      this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
              });
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        
        this.setState({ [name]: value });
    };


    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with up your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name= 'displayName'
                        value= {displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                         <FormInput
                        type='email'
                        name= 'email'
                        value= {email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                         <FormInput
                        type='password'
                        name= 'password'
                        value= {password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                         <FormInput
                        type='password'
                        name= 'confirmPassword'
                        value= {confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomBtn type='submit'>SIGN UP</CustomBtn>
                </form>
            </div>
        )
    }
}

export default SignUp;