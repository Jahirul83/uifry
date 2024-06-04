import groupImg from '../../../assets/group.png';
import group1 from '../../../assets/Group27.png';
import group2 from '../../../assets/Group28.png';
import group3 from '../../../assets/Group29.png';
import group4 from '../../../assets/Group30.png';
import group5 from '../../../assets/Group31.png';

const Testimonial = () => {
    return (
        <div>
            {/* titles */}
            <div className="text-center w-full md:w-64 mx-auto">
                <h2>Testimonial</h2>
                <h2 className="text-4xl font-bold">what our users say about us?</h2>
            </div>
            {/* content */}
            <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                <div>
                    <img src={groupImg} alt="" />
                </div>
                <div className='p-4 w-full md:w-1/2'>
                    <h1 className="text-xl font-bold w-full md:w-2/4">The Best Financial Accounting App Ever!</h1>
                    <p className='mt-4'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
                    {/* group image */}
                    <div className='flex mt-4'>
                        <img className='w-12 mr-2' src={group1} alt="" />
                        <img className='w-12 mr-2' src={group2} alt="" />
                        <img className='w-12 mr-2' src={group3} alt="" />
                        <img className='w-12 mr-2' src={group4} alt="" />
                        <img className='w-12' src={group5} alt="" />
                    </div>
                    <p className='mt-3 font-semibold'>nick jonas</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;