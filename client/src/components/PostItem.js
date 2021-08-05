import React from 'react'

export default function PostItem({post}) {
    return (
        <div>
            <div>
                Author: {post.author}
            </div>
            <div>
                Title: {post.title}
            </div>
            <div>
                Date: {post.date}
            </div>
            <div>
                Content: {post.content}
            </div>
        </div>
    )
}
