import { NavLink } from "react-router-dom"; 
import navPic from "../../public/images/pic1.jpg"

const Navbar = () => {

    const navLink = (
        <>
            <li>
                <NavLink to="/">কেন্দ্রসমূহ ম্যাপে দেখুন</NavLink>
            </li>
            {/* <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </li> */}
            <li>
                <NavLink to="/publicNotice">গণবিজ্ঞপ্তি</NavLink>
            </li>
            <li>
                <NavLink to="/summary">সারসংক্ষেপ দেখুন</NavLink>
            </li>
            <li>
                <NavLink to="/emaergencyMobileNumber">জরুরি মোবাইল নাম্বারসমূহ</NavLink>
            </li>
            <li>
                <NavLink to="/printDownload">প্রিন্ট/ডাউনলোড</NavLink>
            </li>
            <li>
                <NavLink to="/contact">যোগাযোগ</NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
             <div className="navbar-end">
                <img src={navPic} className="w-16 rounded-full p-1"></img>
                {/* <a className="btn">Button</a> */}
            </div>
         
        </div>
    );
};

export default Navbar;