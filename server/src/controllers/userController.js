import User from "./../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userRegister = async (req, res) => {
  try {
    const { userName, email, password, confirmPassword } = req.body;
    if (!userName || !email || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "All the fields required",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password did not match",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: `User with email ${email} already exists`,
      });
    }

    const userNameRegex = /^[A-Z][a-zA-Z'-]{1,49}(?: [A-Z][a-zA-Z'-]{1,49})*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    if (userNameRegex.test(userName) === false) {
      return res.status(400).json({
        success: false,
        message:
          "Please enter your full name using only letters, spaces, apostrophes, or hyphens, with each name starting with a capital letter and between 2 and 50 characters long",
      });
    }

    if (emailRegex.test(email) === false) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address (user@xyz.com)",
      });
    }

    if (passwordRegex.test(password) === false) {
      return res.status(400).json({
        success: false,
        message:
          "Please enter a password between 8-20 characters that includes at least one uppercase letter, one lowercase letter, one number, and one special character (@, $, !, %, *, ?, &)",
      });
    }

    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "User Registration successfull",
      user: { userName, email },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error during registration",
    });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: "Email and Password required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found or invalid email",
      });
    }

    const isPasswordVald = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordVald) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        id: existingUser._id,
        userName: existingUser.userName,
        email: existingUser.email,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: existingUser._id,
        fullName: existingUser.fullName,
        email: existingUser.email,
      },
      token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error during login",
    });
  }
};

export { userRegister, userLogin };
