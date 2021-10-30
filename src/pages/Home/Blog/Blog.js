import React from 'react';

const Blog = ({ blog }) => {
    const { name, img, location } = blog;
    return (
        <div className=" col-lg-4 col-sm-6 col-12 mt-5 mb-5  ">
            <img className="w-100 h-75 " src={img} alt="" />
            <h3 className="mt-4">{name}</h3>
            <h5 className="text-danger ">{location}</h5>
            <a className="text-primary  " href="#">Visit Blogs</a>
        </div>
    );
};

export default Blog;

