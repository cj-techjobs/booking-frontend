import axiosInstance from '/src/pages/api/axiosInstance.js';

// Sign up a new user
export const signUp = async (mobileNumber, password) => {
    try {
        const response = await axiosInstance.post('/signUp', {
            mobileNumber,
            password
        });
        console.log("first3233323233")
    if (response.data.verifyToken) {
        localStorage.setItem('token', response.data.verifyToken);
    }
    console.log(response?.data,"response")
    return response.data;
  } catch (error) {
      throw error.response ? error.response.data : new Error('An unexpected error occurred');
  }
};

// Resend OTP for sign-up
export const resendSignUpOtp = async (mobileNumber) => {
  try {
    const response = await axiosInstance.put('/resendOtp', {
      mobileNumber
    });
    return response.data; 
  } catch (error) {
    throw error.response ? error.response.data : new Error('An unexpected error occurred');
  }
};

// Verify OTP during sign-up
export const verifyOtp = async (mobileNumber, otp) => {
  const token = localStorage.getItem('token'); 

  try {
    const response = await axiosInstance.post('/verifyOtp', {
      mobileNumber,
      otp
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data; 
  } catch (error) {
    throw error.response ? error.response.data : new Error('An unexpected error occurred');
  }
};

// Sign in an existing user
export const signIn = async (mobileNumber, password) => {
  try {
      const response = await axiosInstance.post('/signIn', {
          mobileNumber,
          password
        });
        console.log("first",response.data)
    if (response.data.authToken) {
      localStorage.setItem('token', response.data.authToken);
    }
    return response.data; 
  } catch (error) {
    throw error.response ? new Error(error.response.data.message || 'An error occurred during sign in') : new Error('An unexpected error occurred');
  }
};
