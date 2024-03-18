import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='md:w-1/3 bg-[#1111110D] p-8 rounded-lg h-full'>
            <h2 className='mb-4 text-2xl text-[#111111] font-bold'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark> )
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
};

export default Bookmarks;