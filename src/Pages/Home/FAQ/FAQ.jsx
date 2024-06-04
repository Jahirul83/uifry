import readyImg from '../../../assets/ready.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useContext } from 'react';
import { themeContext } from '../../../Provider/Provider';
// ..
AOS.init();

const FAQ = () => {
    const { dark } = useContext(themeContext);

    const containerStyle = {
        backgroundColor: dark ? '#333333' : '#ffffff',
        color: dark ? '#ffffff' : '#333333',
    };
    return (
        <div style={containerStyle} className="p-4">
            {/* FAQ titles */}
            <h1 className="text-red-400">FAQ</h1>
            <h1 className="text-4xl font-bold w-72">Frequently Asked Questions</h1>
            {/* FAQ content */}
            <div data-aos="flip-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                {/* content 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="bg-red-400 p-5  text-white rounded-md">
                        <h1 className="font-bold text-xl">the best financial accounting app ever!</h1>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                    <div className="p-5">
                        <h1 className="font-bold text-xl">the best financial accounting app ever!</h1>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                </div>
                {/* content 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-5">
                        <h1 className="font-bold text-xl">the best financial accounting app ever!</h1>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                    <div className="bg-red-400 p-5  text-white rounded-md">
                        <h1 className="font-bold text-xl">the best financial accounting app ever!</h1>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                </div>
                {/* content 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="bg-red-400 p-5  text-white rounded-md">
                        <h1 className="font-bold text-xl">the best financial accounting app ever!</h1>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                    <div className="p-5">
                        <h1 className="font-bold text-xl">the best financial accounting app ever!</h1>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                </div>
            </div>
            {/* ready to get started image */}
            <div className='my-2 md:my-24' data-aos="flip-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <img className='w-full' src={readyImg} alt="" />
            </div>
            <div>

            </div>
        </div>
    );
};

export default FAQ;