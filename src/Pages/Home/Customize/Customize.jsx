import customizeImg from '../../../assets/customization.png';
import starIconRound from '../../../assets/star.png';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Customize = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center'>
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <img src={customizeImg} alt="" />
            </div>
            <div className='p-4 w-full md:w-1/2'>
                <div className='mt-3 p-4'>
                    <div className='flex items-center'>
                        <img className='mr-2' src={starIconRound} alt="" />
                        <h1 className='text-xl font-bold'>Fully Customizable</h1>
                    </div>
                    <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                </div>
            </div>
        </div>
    );
};

export default Customize;