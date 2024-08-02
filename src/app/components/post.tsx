import React from "react";
import Image from "next/image";
import BlogPhoto from "../assets/recipe-photo.jpg"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function Post() {
    return (
        <div className="p-2">
            <Image
                src={BlogPhoto}
                alt="blog's photo"
            />
            <div className="flex gap-2 items-center text-secondary-color font-semibold text-sm pt-6">
            <p>Bia Miranda</p>
            <div className="h-1 w-1 bg-secondary-color rounded-full"></div>
            <p>17 Jul 2024</p>
            </div>
            <div className="flex items-center justify-between pt-3">
            <p className="text-2xl font-semibold">Healthy meal</p>
            <ArrowOutwardIcon className="h-7 w-6"/>
            </div>
            <p className="text-secondary-text text-base pt-2">Learn this recipe for a super delicious and healthy lunch for your diet!</p>
        </div>
    )
}