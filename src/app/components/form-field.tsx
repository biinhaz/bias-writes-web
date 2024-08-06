import React from "react";
import { ComponentProps } from "react";

interface FormFieldProps extends ComponentProps<"button"> {
    children: string;
}

export default function FormField(props: FormFieldProps) {
    return (
        <button
        {...props}
        className="h-12 w-full bg-transparent border border-secondary-color rounded-xl text-secondary-text font-light text-sm shadow-lg flex justify-start p-3"
        >
        {props.children}
        </button>
    );
}
