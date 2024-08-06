import React from "react";
import AppButton from "../components/button";
import FormField from "../components/form-field";
import Link from "next/link";
import LoginBG from "../assets/login.png";

export default function LoginPage() {
    return (
        <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${LoginBG.src})` }}
        >
        <div className="bg-white h-[640px] w-[440px] rounded-3xl shadow-xl mt-10 mb-10">
            <div className="m-10">
            <h1 className="text-5xl font-medium">Sign in</h1>
            <div className="text-base mt-5">
                <p className="text-secondary-text">
                If you don’t have an account register
                </p>
                <div className="flex gap-1 m">
                <p className="text-secondary-text">You can</p>
                <Link href="/signUp">
                <p className="text-secondary-color">Register here!</p>
                </Link>
                </div>
            </div>
            <p className="text-base mt-10 mb-3">
                Enter your username or email address
            </p>
            <FormField>Username or Email</FormField>
            <p className="text-base mt-10 mb-3">Enter your password</p>
            <FormField>Password</FormField>
            <Link href="/forgotPassword">
                <p className="mb-10 mt-3 text-sm text-secondary-color justify-end flex">
                Forgot Password?
                </p>
            </Link>
            <AppButton>Sign in</AppButton>
            </div>
        </div>
        </div>
    )
}
