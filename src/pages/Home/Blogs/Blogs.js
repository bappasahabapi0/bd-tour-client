import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Experts = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`https://whispering-beyond-39369.herokuapp.com/blogs`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <div id="blogs" className="container">
            <h2 className="text-dark fw-bolder m-5"> POPULAR TOUR BLOGS 🏂</h2>
            <div className="row bg-info bg-opacity-10">
                {
                    blogs.map(blog => <Blog
                        key={blog.name}
                        blog={blog}
                    >
                    </Blog>)
                }

            </div>
        </div>
    );
};

export default Experts;