import React from "react";
import SingUpBG from "../assets/signUpBg.png";
import AppButton from "../components/button";
import FormField from "../components/form-field";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${SingUpBG.src})` }}
        >
        <div className="bg-white h-[640px] w-[440px] rounded-3xl shadow-xl mt-10 mb-10">
            <div className="m-10">
            <h1 className="text-5xl font-medium">Sign up</h1>
            <div className="text-base mt-5">
                <p className="text-secondary-text">
                If you already have an account register
                </p>
                <div className="flex gap-1">
                <p className="text-secondary-text">You can</p>
                <Link href="/login">
                    <p className="text-secondary-color">Login here!</p>
                </Link>
                </div>
            </div>
            <p className="text-base mt-5 mb-3">Enter your email address</p>
            <FormField>Email</FormField>
            <p className="text-base mt-5 mb-3 ">Enter your username</p>
            <FormField>Username</FormField>
            <p className="text-base mt-5 mb-3">Enter your password</p>
            <FormField>Password</FormField>
            <div className="mt-14">
            <AppButton>Sign up</AppButton>
            </div>
            </div>
        </div>
        </div>
    )
}
