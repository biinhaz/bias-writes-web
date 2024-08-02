import React from "react";
import Post from "./post";

export default function RecentPosts() {
    return (
        <div className="p-10">
        <h1 className="text-2xl font-semibold pb-6">Recent Posts</h1>
        <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
            <Post />
            </div>
            <div className="flex flex-col gap-6 max-h-40">
            <Post />
            <Post />
            </div>
        </div>
        </div>
    );
}
