import { NavLink } from "react-router-dom"; 
import navPic from "../../public/images/pic1.jpg"

const Navbar = () => {

    const navLink = (
        <>
            <li>
                <NavLink to="/">ভোটকেন্দ্র সমূহ</NavLink>
                 <div>
                    <a href='https://maps.app.goo.gl/k1zKNgYQyLL1tMQr5' target="_blank"></a>
                </div>
            </li>
            {/* <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </li> */}
            <li>
                <NavLink to="/publicNotice">কেন্দ্রসমূহ ম্যাপে দেখুন</NavLink>
            </li>
            <li>
                <NavLink to="/summary">সারসংক্ষেপ দেখুন</NavLink>
            </li>
            <li>
                <NavLink to="/emaergencyMobileNumber">জরুরি মোবাইল নাম্বারসমূহ</NavLink>
            </li>
            {/* <li>
                <NavLink to="/printDownload">প্রিন্ট/ডাউনলোড</NavLink>
            </li> */}
            {/* <li>
                <NavLink to="/contact">যোগাযোগ</NavLink>
            </li> */}
        </>
    );

    return (


          <div className="navbar bg-base-300">
            <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-36 p-2 shadow">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-blue-500 font-extrabold">ভোটকেন্দ্র ব্যবস্থাপনা</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-extrabold">
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