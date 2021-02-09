import React, {useState} from 'react';
import { getUserData, updateUserDetails } from '../../actions/index';
import SignupForm from './SignupForm';


function EditUserDetails() {
  const response = getUserData();
  const [data] = useState(response);
    
  return (
    <SignupForm 
      title={'Edit Details'} 
      initialData={data} 
      actionButtonLabel={'Save Profile'} 
      actionHandler={updateUserDetails} 
    />
  );
}

export default EditUserDetails;

