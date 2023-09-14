import React from 'react';
import Post from './post';

async function getData() {
    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    return req.json();
}

export default async function Posts() {
    let posts = await getData();

    return (
        <div>
            Posts
            {posts.map(e => {
                return (
                    <div>
                        {e.id}
                        <Post data={e} />
                    </div>
                )
            })}
        </div>
    )
}