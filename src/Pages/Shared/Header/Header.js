import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const menuItems = <React.Fragment>

        <li><Link className='colorYellowHv' to="/home">Home</Link></li>
        <li><Link className='colorYellowHv' to="/allproducts">All Products
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
        </Link>
            <ul className="p-2 bg-colorYellow text-center colorGray z-10">
                <li><Link>Submenu 1</Link></li>
                <li><Link>Submenu 2</Link></li>
            </ul>
        </li>
        <li><Link className='colorYellowHv'>Menu-2</Link></li>
        <li><Link className='colorYellowHv' to="/blog">Blog</Link></li>
    </React.Fragment>

    return (
        <div className='bg-colorGray py-2'>
            <div className="navbar text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 bg-white colorGray font-semibold text-sm tracking-wider uppercase w-screen">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className='text-xl font-normal'>AS<span className='font-black '>FALL<span>9</span></span><sup className='colorYellow text-xl tracking-wide'> sell</sup></Link>
                </div>
                <div className="navbar-center uppercase hidden lg:flex">
                    <ul className="menu menu-horizontal font-semibold text-sm tracking-wider p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end tracking-wide">
                    <Link className='btn colorGray border-none rounded-none bg-colorYellow bg-colorYellowDk'>Login</Link>
                    <Link className='btn colorGray border-none rounded-none bg-colorYellow bg-colorYellowDk'> Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;