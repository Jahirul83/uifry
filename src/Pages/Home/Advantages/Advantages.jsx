import { useContext } from 'react';
import advImg from '../../../assets/advantages.png';
import ballIcon from '../../../assets/ball.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { themeContext } from '../../../Provider/Provider';
// ..
AOS.init();

const Advantages = () => {
    const { dark } = useContext(themeContext);

    const containerStyle = {
        backgroundColor: dark ? '#333333' : '#ffffff',
        color: dark ? '#ffffff' : '#333333',
    };
    return (
        <div style={containerStyle} className='flex flex-col md:flex-row justify-between items-center'>
            <div className='p-4 w-full md:w-1/2'>
                <h1 className='text-xl font-semibold text-red-400 mb-2'>advantages</h1>
                <h1 className='text-4xl font-bold'>Why Choose Uifry?</h1>
                <div className='flex mt-2 items-center'>
                    <img className='mr-2' src={ballIcon} alt="" />
                    <h1 className='text-xl items-center font-bold'>Clever Notifications</h1>
                </div>
                <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
            </div>
            <div data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <img src={advImg} alt="" />
            </div>
        </div>
    );
};

export default Advantages;