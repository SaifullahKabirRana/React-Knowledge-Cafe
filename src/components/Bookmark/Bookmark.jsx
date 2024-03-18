import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-[#FFFFFF] p-5 mb-4 rounded-lg'>
            <h3 className='text-[18px] text-[#111111] font-medium'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark : PropTypes.object.isRequired 
}

export default Bookmark;