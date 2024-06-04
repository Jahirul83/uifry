import Logo from '../../assets/Logo.png';
import phnIcon from '../../assets/phoneIcon.png';
import mailIcon from '../../assets/Help.png';
import { useContext } from 'react';
import { themeContext } from '../../Provider/Provider';

const Footer = () => {
    const { dark } = useContext(themeContext);

    const containerStyle = {
        backgroundColor: dark ? '#333333' : '#ffffff',
        color: dark ? '#ffffff' : '#333333',
    };
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content" style={containerStyle}>
                <nav>
                    <div>
                        <img src={Logo} alt="" />
                    </div>
                    <div className='flex'>
                        <img src={mailIcon} alt="" />
                        <a className="link link-hover font-bold ml-3">help@frybix.com</a>
                    </div>
                    <div className='flex'>
                        <img src={phnIcon} alt="" />
                        <a className="link link-hover font-bold ml-3">+1 234 456 678 89</a>
                    </div>
                </nav>
                <nav>
                    <h6 className="text-3xl font-bold">Links</h6>
                    <a className="link link-hover font-bold">Home</a>
                    <a className="link link-hover font-bold">About us</a>
                    <a className="link link-hover font-bold">bookings</a>
                    <a className="link link-hover font-bold">blog</a>
                </nav>
                <nav>
                    <h6 className="text-3xl font-bold">Legal</h6>
                    <a className="link link-hover font-bold">Terms Of Use</a>
                    <a className="link link-hover font-bold">Privacy Policy</a>
                    <a className="link link-hover font-bold">Jobs</a>
                    <a className="link link-hover font-bold">Cookie Policy</a>
                </nav>
                <nav>
                    <h6 className="text-3xl font-bold">Product</h6>
                    <a className="link link-hover font-bold">Take Tour</a>
                    <a className="link link-hover font-bold">Live Chat</a>
                    <a className="link link-hover font-bold">Reveiws</a>
                </nav>
                <nav>
                    <h6 className="text-3xl font-bold">Newsletter</h6>
                    <div>
                        <input type="text" className="input input-bordered" placeholder="Your email" />
                        <button className="btn bg-black text-white">Subscribe</button>
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content border-t-4 border-zinc-700	">
                <aside>
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;