
import axios from 'axios';
import { 
  GET_ERRORS, 
  CLEAR_ERRORS, 
  SHOW_MODAL,
} from '../constants/index';

// Register User
export const registerUser = (userData) => dispatch => {
  dispatch(clearErrors());
  const user = localStorage.getItem("userDetails");
  if(user != null && user.email === userData.email) {
    dispatch({
      type: SHOW_MODAL,
      payload: {
        status: true,
        message: "Account already exist with this Email"
      }
    });
    return;
  }
  if(userData.email !== "") {
    localStorage.setItem('userDetails', JSON.stringify(userData));

    axios.post('/api/user/register', userData)
      .then(res => {
        dispatch({
          type: SHOW_MODAL,
          payload: {
            status: true,
            message: "Profile has been created Successfully"
          }
        });
        return res;
      })
      .then(res => {
        localStorage.removeItem('jwtToken');
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      });
  }
  else {
    dispatch({
      type: GET_ERRORS,
      payload: "Please fill the form data"
    })
  }
};

// Get user details to show on user details page
export const getUserData = () => {
  const data = localStorage.getItem("userDetails");
  if(data === null) {
    return {message: "There is no data in database"};
  }else {
    return JSON.parse(data);
  }
}

// Update User Details
export const updateUserDetails = (userData) => dispatch => {
  dispatch(clearErrors());
  if(userData.email !== "") {
    localStorage.removeItem('userDetails');
    localStorage.setItem('userDetails', JSON.stringify(userData));
    dispatch({
      type: SHOW_MODAL,
      payload: {
        status: true,
        message: "Details Updated Successfully"
      }
    });
  }else {
    dispatch({
      type: GET_ERRORS,
      payload: "Please fill the form data"
    })
  }
};

// Clear Error messages from store
export const clearErrors = () => dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  });
};