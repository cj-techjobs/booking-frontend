import { toast } from "react-toastify";
import axiosInstance from "/src/pages/api/axiosInstance.js";

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
    console.log(response?.data, "response");
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
    const response = await axiosInstance.post("http://sixback.eu-north-1.elasticbeanstalk.com/api/v1/auth/signIn", {
      mobileNumber,
      password,
    });
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
