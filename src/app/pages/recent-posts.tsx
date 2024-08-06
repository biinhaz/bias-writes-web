import React from "react";
import Post from "../components/post";

export default function RecentPosts() {
    return (
        <div className="p-10">
        <h1 className="text-2xl font-semibold pb-6">Recent Posts</h1>
        <div className="grid grid-cols-2 gap-6">
            <Post />
            <Post />
            {/* <div className="grid grid-rows-2">
            <Post />
            <Post />
            </div> */}
        </div>
        </div>
    );
}
