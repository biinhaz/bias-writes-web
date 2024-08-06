import React from "react";
import { ComponentProps } from "react";

interface AppButtonProps extends ComponentProps<'button'> {
    children: string
}

export default function AppButton(props: AppButtonProps) {
    return (
        <button {...props} className="h-12 w-full bg-secondary-color rounded-xl text-white font-medium shadow-xl">
            {props.children}
        </button>
    )
}