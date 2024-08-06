import React from "react";
import BackgroundImage from "../assets/forgotPassword.png"
import AppButton from "../components/button";
import FormField from "../components/form-field";
import Link from "next/link";
import { ArrowBackOutlined } from "@mui/icons-material";

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundImage.src})`}}>
        <div className="bg-white h-[640px] w-[440px] rounded-3xl shadow-xl mt-10 mb-10">
            <div className="m-10">
                <Link href="/login">
                <ArrowBackOutlined/>
                </Link>
            <h1 className="text-5xl font- mt-5">Forgot Password</h1>
            <p className="text-base mt-10 mb-3">Enter your email address</p>
            <FormField>Email</FormField>
            <div className="mt-10">
            <AppButton>Send email</AppButton>
            </div>
            </div>
        </div>
        </div>
    );
}
