import PropTypes from 'prop-types';
import { LuBookmark } from "react-icons/lu";

const Blog = ({ blog, handleAddToBookmark }) => {
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
                        <button className='text-2xl' onClick={handleAddToBookmark}>
                            <LuBookmark></LuBookmark>
                            </button>
                    </div>
                </div>
            </div>
            <h2 className='text-[40px] text-[#111111] font-bold mb-4'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span className='mx-2 text-xl text-[#11111199]  font-medium' key={idx}><a  href='#'>#{hash}</a></span>)
                }
            </p>


        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;