import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddToBookmark}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            
            <div>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddToBookmark={handleAddToBookmark}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blogs;