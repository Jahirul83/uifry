import { useContext } from "react";
import Logo from '../../../assets/Logo.png';
import { themeContext } from '../../../Provider/Provider';
const NavBar = () => {
    const { dark, setDark } = useContext(themeContext);

    const handleDark = () => {
        setDark(!dark);
        console.log(dark);
    }

    const containerStyle = {
        backgroundColor: dark ? '#333333' : '#ffffff',
        color: dark ? '#ffffff' : '#333333',
    };


    const navItems = <>
        <li><a className='font-bold hover:text-red-400'>Home</a></li>
        <li><a className='font-bold hover:text-red-400'>About us</a></li>
        <li><a className='font-bold hover:text-red-400'>Pricing</a></li>
        <li><a className='font-bold hover:text-red-400'>Features</a></li>
        <button></button>
    </>
    return (
        <div style={containerStyle} className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div className="btn btn-ghost text-xl">
                    <img src={Logo} alt="" />
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                        <input onClick={handleDark} type="checkbox" className="toggle" />
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                <a className="btn bg-black text-white">Download</a>
            </div>
        </div>
    );
};

export default NavBar;