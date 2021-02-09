import React, {useState} from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import {useSignUpForm} from '../custom-hooks/useSignUpForm';
// import InputField from '../shared/InputField';
// import { getUserData } from '../../actions/index';
import { registerUser } from '../../actions/index';
import SignupForm from './SignupForm';

const initialFormData = {
    first_name: '',
    last_name: '',
    email: '',
    address: ''
};

function CreateUser() {
    const [formData] = useState(initialFormData);
    
    return (
        <SignupForm 
            title={'Sign Up'} 
            initialData={formData} 
            actionButtonLabel={'Create Profile'}
            actionHandler={registerUser}    
        />
      );
}
export default CreateUser;