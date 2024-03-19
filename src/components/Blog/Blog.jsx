import PropTypes from 'prop-types';
import { LuBookmark } from "react-icons/lu";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;

    return (
        <div className='mb-20'>
            <img className='w-full  rounded-[8px]' src={cover} alt={`Cover picture of the tittle ${title}`} />
            <div className='flex justify-between mt-8 mb-4'>
                <div className='flex '>
                    <div>
                        <img className='w-14' src={author_img} alt="" />
                    </div>
                    <div className='ml-6'>
                        <h3 className='text-2xl text-[#111111] font-bold'>{author}</h3>
                        <p className='text-base text-[#11111199] font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <div className='text-[#11111199] text-xl font-medium flex gap-3'>
                        <span>{reading_time} min read</span>
                        <button className='text-2xl'
                            onClick={() => handleAddToBookmark(blog)}>
                            <LuBookmark></LuBookmark>
                        </button>
                    </div>
                </div>
            </div>
            <h2 className=' bg text-[40px] text-[#111111] font-bold mb-4'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span className='mx-2 text-xl text-[#11111199]  font-medium' key={idx}><a href='#'>#{hash}</a></span>)
                }
            </p>
            <button
                onClick={() => handleMarkAsRead(reading_time)}
                className='text-[#6047EC] underline text-xl font-semibold mt-6'>Mark As Read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;