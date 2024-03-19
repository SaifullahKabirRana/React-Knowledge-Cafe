import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        
        <section className='md:w-1/3 h-full'>
            <div className='bg-[#6047EC1A] border border-[#6047EC] rounded-lg mb-6'>
                <h3 className='text-2xl font-bold text-[#6047EC] p-5'>
                    Spent time on read: {readingTime} min
                </h3>
            </div>

            <div className=' bg-[#1111110D] p-8 rounded-lg h-full'>
            <h2 className='mb-4 text-2xl text-[#111111] font-bold'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> )
            }
        </div>
        </section>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
};

export default Bookmarks;