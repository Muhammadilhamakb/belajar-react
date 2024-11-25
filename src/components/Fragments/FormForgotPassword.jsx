import React from 'react'
import Button from "../Elements/Button";
import CheckBox from "../Elements/CheckBox";
import LabeledInput from "../Elements/LabeledInput";
import { Link } from 'react-router-dom'
import Logo from '../Elements/Logo/index'

const FormForgotPassword = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
        <div className=" p-8 rounded-lg max-w-md w-full">
            <Logo />
            <h2 className="text-xl font-bold text-center mt-6">Forgot Password?</h2>
            <p className="text-center text-gray-500 mt-2">
            Enter your email address to get the <br /> password reset link.
            </p>

            <form action="" className="mt-6">
                <div className="mb-6 font-semibold">
                <LabeledInput
                        label="Email address"
                        type="email"
                        placeholder="hello@example.com"
                        name="email"
                    />
                </div>
                <Button variant="bg-primary w-full text-white" type="submit" >
                    Password Reset
                </Button>
            </form>

            <div className="text-center mt-6 font-semibold">
            <Link to="/login" className="text-gray-500 text-sm hover:underline">
                Back to login
            </Link>
            </div>
        </div>
    </div>
  )
}

export default FormForgotPassword