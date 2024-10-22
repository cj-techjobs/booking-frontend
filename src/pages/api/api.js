import { toast } from "react-toastify";
import axiosInstance from "./axiosInstance";

//get user profile
export const getUserProfile = async () => {
  try {
    const authToken = localStorage.getItem("auth_token");
    if (!authToken) {
      console.error("Auth token not found");
      return;
    }
    const response = await axiosInstance.get("/user/profile", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response?.data;
  } catch (error) {
    throw error?.response
      ? error?.response?.data
      : new Error("An unexpected error occurred");
  }
};

//get all the new car
export const getAllNewCarData = async () => {
  try {
    const authToken = localStorage.getItem("auth_token");
    if (!authToken) {
      console.error("Auth token not found");
      return;
    }

    const response = await axiosInstance.get("newcar?skip=0&limit=&page=", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    // Log the response data to the console
    // console.log("API Response Data:", response?.data);

    return response?.data; // Return the data after logging
  } catch (error) {
    // Log the error to the console for better debugging
    console.error("Error fetching car data:", error);
    throw error?.response
      ? error?.response?.data
      : new Error("An unexpected error occurred");
  }
};

//get all used car data
export const getAllCarData = async () => {
  try {
    const authToken = localStorage.getItem("auth_token");
    if (!authToken) {
      console.error("Auth token not found");
      return;
    }

    const response = await axiosInstance.get("car?skip=0&limit=&page=", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    // Log the response data to the console
    // console.log("API Response Data:", response?.data);

    return response?.data; // Return the data after logging
  } catch (error) {
    // Log the error to the console for better debugging
    console.error("Error fetching car data:", error);
    throw error?.response
      ? error?.response?.data
      : new Error("An unexpected error occurred");
  }
};
//get all the new car type
export const getAllNewCarType = async () => {
  try {
    const authToken = localStorage.getItem("auth_token");
    if (!authToken) {
      console.error("Auth token not found");
      return;
    }
    // http://13.234.115.173:8000/api/v1/cms/vehicle-regularity/vehicle-type
    const response = await axiosInstance.get(
      "cms/vehicle-regularity/vehicle-type",
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    // Log the response data to the console
    // console.log("API Response Data:", response?.data);

    return response?.data; // Return the data after logging
  } catch (error) {
    // Log the error to the console for better debugging
    console.error("Error fetching car data:", error);
    throw error?.response
      ? error?.response?.data
      : new Error("An unexpected error occurred");
  }
};


//get car for a particular body type
export const getNewCarsByBodyType = async (bodyType) => {
  try {
    const authToken = localStorage.getItem("auth_token");
    if (!authToken) {
      console.error("Auth token not found");
      return;
    }

    // Construct the API URL dynamically based on the bodyType
    const response = await axiosInstance.get(`/newcar`, {
      params: {
        BodyType: JSON.stringify([bodyType]), // Sending the bodyType as an array in the query string
      },
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    // Log the response data for debugging
    // console.log("API Response Data:", response?.data);

    return response?.data; // Return the data to be used in the component
  } catch (error) {
    console.error("Error fetching cars by body type:", error);
    throw error?.response
      ? error?.response?.data
      : new Error("An unexpected error occurred");
  }
};

//get the new car by id
export const getNewCarById = async (id) => {
  try {
    const authToken = localStorage.getItem("auth_token");
    if (!authToken) {
      console.error("Auth token not found");
      return;
    }

    const response = await axiosInstance.get(`newcar/${id}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    // Log the response data to the console
    // console.log(`API Response Data for Car ID ${id}:`, response?.data);

    return response?.data; // Return the data after logging
  } catch (error) {
    // Log the error to the console for better debugging
    console.error(`Error fetching car data by ID (${id}):`, error);
    throw error?.response
      ? error?.response?.data
      : new Error("An unexpected error occurred");
  }
};
//get the  car by id
export const getCarById = async (id) => {
  try {
    const authToken = localStorage.getItem("auth_token");
    if (!authToken) {
      console.error("Auth token not found");
      return;
    }

    // const response = await axiosInstance.get(`http://13.234.115.173:8000/api/v1/car/6710d7512e3a7dfe2022026b`, {
    const response = await axiosInstance.get(`car/${id}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    // Log the response data to the console
    // console.log(`API Response Data for Car ID ${id}:`, response?.data);

    return response?.data; // Return the data after logging
  } catch (error) {
    // Log the error to the console for better debugging
    console.error(`Error fetching car data by ID (${id}):`, error);
    throw error?.response
      ? error?.response?.data
      : new Error("An unexpected error occurred");
  }
};

// Sign up a new user
export const signUp = async (mobileNumber, password) => {
  try {
    const response = await axiosInstance.post("/auth/signUp", {
      mobileNumber,
      password,
    });
    if (response.data.verifyToken) {
      localStorage.setItem("token", response.data.verifyToken);
    }
    // console.log(response?.data, "response");
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("An unexpected error occurred");
  }
};

// Resend OTP for sign-up
export const resendSignUpOtp = async (mobileNumber, userId) => {
  try {
    const response = await axiosInstance.put("/auth/signUp", {
      mobileNumber,
      userId,
    });
    return response.data;
  } catch (error) {
    console.error("Error during OTP resend:", error);
    throw error.response
      ? error.response.data
      : new Error("An unexpected error occurred");
  }
};

// Verify OTP during sign-up
export const verifyOtp = async ({ mobileNumber, otp, token }) => {
  try {
    const response = await axiosInstance.post(
      "/auth/verifyOtp",
      {
        mobileNumber,
        otp,
      },
      {
        headers: {
          VerifyToken: token,
        },
      }
    );
    return response?.data;
  } catch (error) {
    console.log("🚀 ~ verifyOtp ~ error:", error);
    throw error.response
      ? error.response.data
      : new Error("An unexpected error occurred");
  }
};

// Sign in an existing user
export const signIn = async (mobileNumber, password) => {
  try {
    const response = await axiosInstance.post(
      "http://sixback.eu-north-1.elasticbeanstalk.com/api/v1/auth/signIn",
      {
        mobileNumber,
        password,
      }
    );
    if (response.data.authToken) {
      localStorage.setItem("auth_token", response.data.authToken);
    }
    return response.data;
  } catch (error) {
    throw error.response
      ? new Error(
          error.response.data.message || "An error occurred during sign in"
        )
      : new Error("An unexpected error occurred");
  }
};

// forgot password
export const forgotPassword = async (mobileNumber) => {
  try {
    const response = await axiosInstance.post("/auth/forgotPassword", {
      mobileNumber,
    });

    console.log("Password reset response:", response.data);

    return response.data;
  } catch (error) {
    // Handle errors
    throw error.response
      ? new Error(
          error.response.data.message ||
            "An error occurred during the password reset process"
        )
      : new Error("An unexpected error occurred");
  }
};

//forgot password otp verification
export const verifyForgotPasswordOtp = async ({ mobileNumber, otp, token }) => {
  try {
    const response = await axiosInstance.post(
      "/auth/verify/forgotPasswordOTP",
      { mobileNumber, otp },
      {
        headers: {
          VerifyFPToken: token,
        },
      }
    );
    return response?.data;
  } catch (error) {
    console.log("🚀 ~ verifyForgotPasswordOtp ~ error:", error);
    throw error.response
      ? error.response.data
      : new Error("An unexpected error occurred");
  }
};

//create new password
export const resetPassword = async (mobileNumber, newPassword) => {
  try {
    const response = await axiosInstance.put("/auth/forgotPassword", {
      mobileNumber,
      password: newPassword,
    });
    return response.data;
  } catch (error) {
    console.error("Error during password reset:", error);
    throw error.response
      ? error.response.data
      : new Error("An unexpected error occurred");
  }
};

//update user details
export const updateUserProfile = async (email, fullName, birthDate) => {
  try {
    const authToken = localStorage.getItem("auth_token");
    const response = await axiosInstance.put(
      "/user/profile",
      {
        email,
        fullName,
        birthDate,
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error.response
      ? error.response.data
      : new Error("An unexpected error occurred");
  }
};

export const fetchFilteredCars = async (maxPrice, selectedColor, selectedTransmission, selectedBodyTypes) => {
  try {
    const authToken = localStorage.getItem("auth_token");
    if (!authToken) {
      console.error("Auth token not found");
      return;
    }

    let url = `car?`;
    if (maxPrice) {
      url += `price=${maxPrice}`;
    }
    if (selectedColor) {
      url += `${maxPrice ? '&' : ''}color=${selectedColor}`;
    }
    if (selectedTransmission) {
      url += `${(maxPrice || selectedColor) ? '&' : ''}Transmission=["${selectedTransmission}"]`;
    }
    if (selectedBodyTypes.length > 0) {
      // Join selected body types as a string to include in the URL
      url += `${(maxPrice || selectedColor || selectedTransmission) ? '&' : ''}BodyType=["${selectedBodyTypes.join('","')}"]`;
    }

    const response = await axiosInstance.get(url, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    console.log("API Response Data:", response?.data);
    return response?.data?.data?.list || []; // Return the list of filtered cars
  } catch (error) {
    console.error("Error fetching filtered cars:", error);
    throw error?.response?.data || "An unexpected error occurred";
  }
};
