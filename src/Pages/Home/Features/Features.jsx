import starIcon from '../../../assets/StarIcon.png';
import boxIcon from '../../../assets/boxIcon.png';
import cubeIcon from '../../../assets/cubeIcon.png';
import features from '../../../assets/features.png';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Features = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center'>
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <img src={features} alt="" />
            </div>
            <div className='p-4 w-full md:w-1/2'>
                <h1 className='text-xl font-semibold text-red-400'>Features</h1>
                <h1 className='text-4xl font-bold'>Uifry Premium</h1>
                <div className='mt-3 p-11'>
                    <div className='flex'>
                        <img className='mr-2 my-2' src={starIcon} alt="" />
                        <h1 className='font-bold my-2'>Budgeting Intervals</h1>
                    </div>
                    <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    <div className='flex'>
                        <img className='mr-2 my-2' src={boxIcon} alt="" />
                        <h1 className='font-bold my-2'>Budgeting Intervals</h1>
                    </div>
                    <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    <div className='flex'>
                        <img className='mr-2 my-2' src={cubeIcon} alt="" />
                        <h1 className='font-bold my-2'>Budgeting Intervals</h1>
                    </div>
                    <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;