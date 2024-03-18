
import profile from '../../assets/images/profile.png';


const Header = () => {
    return (
        <section className='container mx-auto'>
            <div className=' flex justify-between mt-8 '>
                <h1 className='text-4xl font-bold text-[#111111]'>Knowledge Cafe</h1>
                <img src={profile} alt="" />
            </div>
            <div className='mt-6 border text-[#11111126] mb-8'></div>
        </section>


    );
};



export default Header;