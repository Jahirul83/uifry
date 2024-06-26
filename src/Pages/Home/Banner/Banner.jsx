import { useContext } from 'react';
import bannerImg from '../../../assets/banner.png';
import bannerPhone from '../../../assets/bannerPhone.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";
import { themeContext } from '../../../Provider/Provider';



const Banner = () => {
    const { dark } = useContext(themeContext);

    const containerStyle = {
        backgroundColor: dark ? '#333333' : '#ffffff',
        color: dark ? '#ffffff' : '#333333',
    };
    return (
        <div style={containerStyle} className='flex flex-col md:flex-row justify-evenly p-8 md:p-2 items-center'>
            <div>
                <div className='w-full md:w-3/4'>
                    <h1 className="text-4xl">Make The Best Financial Decisions</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, magni hic quod deleniti dolor in doloremque laboriosam, deserunt, accusamus autem modi totam tenetur obcaecati omnis perspiciatis neque assumenda aperiam provident?</p>
                </div>
                <div>
                    <button className='btn mt-1 bg-black text-white'>Get Started <FaLongArrowAltRight />
                    </button>
                    <button className='btn mt-1 md:mt-0 ml-0 md:ml-3'><IoPlayCircleOutline />
                        watch video
                    </button>
                </div>
                <div>
                    <img className='w-[400px] mt-3' src={bannerImg} alt="" />
                </div>
            </div>
            <div className='w-64 md:w-2/3'>
                <img src={bannerPhone} alt="" />
            </div>
        </div>
    );
};

export default Banner;