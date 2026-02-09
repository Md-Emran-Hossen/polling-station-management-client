import { NavLink } from "react-router-dom"; 
import navPic from "../../public/images/pic1.jpg";
import homePic from "../../public/images/home.png";
import '../App.css';

const Navbar = () => {

    // const navLink = (
    //     <>
    //         <li>
    //             <NavLink to="/" reloadDocument>ভোটকেন্দ্র সমূহ</NavLink>
    //         </li>
    //         <li>
    //             <NavLink to="/map">কেন্দ্রসমূহ ম্যাপে দেখুন</NavLink>
    //         </li>
    //         <li>
    //             <NavLink to="/summary">সারসংক্ষেপ দেখুন</NavLink>
    //         </li>
    //         <li>
    //             <a>আইনশৃঙ্খলা রক্ষাকারী বাহিনী</a>
    //             <ul>
    //                 <li>
    //                     <NavLink to="/army">আর্মি</NavLink>
    //                 </li>
    //                 <li>
    //                     <NavLink to="/bgb">বিজিবি</NavLink>
    //                 </li>
    //                  <li>
    //                     <NavLink to="/police">পুলিশ</NavLink>
    //                 </li>
    //                 <li>
    //                     <NavLink to="/rab">র‍্যাব</NavLink>
    //                 </li>
    //             </ul>
    //         </li>
    //         {/* <li>
    //             <NavLink to="/printDownload">প্রিন্ট/ডাউনলোড</NavLink>
    //         </li> */}
    //         {/* <li>
    //             <NavLink to="/contact">যোগাযোগ</NavLink>
    //         </li> */}
    //     </>
    // );

    return (

            <div className="navbar bg-bottle-green shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 bg-white"
                             fill="none" 
                             viewBox="0 0 24 24" 
                             stroke="currentColor"> 
                             <path strokeLinecap="round" 
                             strokeLinejoin="round" 
                             strokeWidth="2" 
                             d="M4 6h16M4 12h8m-8 6h16" /> 
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black font-extrabold">
                        <li>
                            <NavLink to="/" reloadDocument>
                                <img src={homePic} className="w-6 rounded-full"></img>
                                ভোটকেন্দ্র সমূহ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/map" reloadDocument>কেন্দ্রসমূহ ম্যাপে দেখুন</NavLink>
                        </li>
                        <li>
                            <NavLink to="/summary" reloadDocument>সারসংক্ষেপ দেখুন</NavLink>
                        </li>
                        <li>
                            <a>ম্যাজিস্ট্রেট</a>
                            <ul className="p-2">
                                <li>
                                     <NavLink to="/executiveMagistrate" reloadDocument>এক্সিকিউটিভ ম্যাজিস্ট্রেট</NavLink>
                                </li>
                                <li>
                                     <NavLink to="/judicialMagistrate" reloadDocument>জুডিশিয়াল ম্যাজিস্ট্রেট</NavLink>
                                </li>
                            </ul>
                            {/* <NavLink to="/executiveMagistrate" reloadDocument></NavLink> */}
                        </li>
                        <li>
                        <a>আইনশৃঙ্খলা রক্ষাকারী বাহিনী</a>
                            <ul className="p-2">
                                <li>
                                     <NavLink to="/army" reloadDocument>আর্মি</NavLink>
                                </li>
                                <li>
                                     <NavLink to="/bgb" reloadDocument>বিজিবি</NavLink>
                                </li>
                                 <li>
                                      <NavLink to="/police" reloadDocument>পুলিশ</NavLink>
                                </li>
                                <li>
                                     <NavLink to="/rab" reloadDocument>র‍্যাব</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/contacts" reloadDocument> অন্যন্য যোগাযোগ </NavLink>
                        </li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost font-bold text-white">ভোটকেন্দ্র ব্যবস্থাপনা</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white font-extrabold">
                    <li>
                      
                        <NavLink to="/" reloadDocument>
                          <img src={homePic} className="w-6 rounded-full"></img>
                            ভোটকেন্দ্র সমূহ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/map">কেন্দ্রসমূহ ম্যাপে দেখুন</NavLink>
                    </li>
                    <li>
                        <NavLink to="/summary">সারসংক্ষেপ দেখুন</NavLink>
                    </li>
                    <li>
                        <details>
                        <summary>ম্যাজিস্ট্রেট</summary>
                        <ul className="p-2 bg-base-100 w-40 z-1 text-black">
                            <li>
                                <NavLink to="/executiveMagistrate">এক্সিকিউটিভ ম্যাজিস্ট্রেট</NavLink>
                            </li>
                            <li>
                                <NavLink to="/judicialMagistrate">জুডিশিয়াল ম্যাজিস্ট্রেট</NavLink>
                             </li>
                        </ul>
                        </details>
                            {/* <NavLink to="/executiveMagistrate" reloadDocument></NavLink> */}
                    </li>
                    <li>
                        <details>
                        <summary>আইনশৃঙ্খলা রক্ষাকারী বাহিনী</summary>
                        <ul className="p-2 bg-base-100 w-40 z-1 text-black">
                            <li>
                                <NavLink to="/army">আর্মি</NavLink>
                            </li>
                            <li>
                                <NavLink to="/bgb">বিজিবি</NavLink>
                            </li>
                            <li>
                                <NavLink to="/police">পুলিশ</NavLink>
                            </li>
                            <li>
                                <NavLink to="/rab">র‍্যাব</NavLink>
                            </li>
                        </ul>
                        </details>
                    </li>
                    <li>
                        <NavLink to="/contacts"> অন্যন্য যোগাযোগ </NavLink>
                    </li>
                    </ul>
                </div>
                <div className="navbar-end">
                     <img src={navPic} className="w-16 rounded-full p-1"></img>
                </div>
                </div>

        //   <div className="navbar bg-bottle-green">
        //     <div className="navbar-start">

        //         <div className="dropdown">
        //             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        //                 <svg
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     className="h-5 w-5 bg-white"
        //                     fill="none"
        //                     viewBox="0 0 24 24"
        //                     stroke="currentColor">
        //                     <path
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                         strokeWidth="2"
        //                         d="M4 6h16M4 12h8m-8 6h16" />
        //                 </svg>
        //             </div>
        //             <ul
        //                 tabIndex={0}
        //                 className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-36 p-2 shadow">
        //                 {navLink}
        //             </ul>
        //         </div>
        //         <a className="btn btn-ghost text-white font-bold">ভোটকেন্দ্র ব্যবস্থাপনা</a>
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
        //             {navLink}
        //         </ul>
        //     </div>
        //     <div className="navbar-end">
        //         <img src={navPic} className="w-16 rounded-full p-1"></img>
        //     </div>
        // </div>
    );
};

export default Navbar;