import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const Header = () => {
    const { logOut, user } = useContext(AuthContext);

    const menuItems = <React.Fragment>

        <li><Link className='bg-colorYellowDk hover:text-white' to="/home">Home</Link></li>
        <li><Link className='bg-colorYellowDk hover:text-white' >Cars & Categories
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
        </Link>
            <ul className="p-2 bg-colorYellow text-center colorGray z-10">
                <li><Link to="/allcars">All Cars</Link></li>
                <li><Link>Submenu 2</Link></li>
            </ul>
        </li>
        {
            user?.email &&
            <li><Link className='bg-colorYellowDk hover:text-white' >dashboard
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
                <ul className="p-2 bg-colorYellow text-center colorGray z-10">
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                    <li><Link to="/dashboard/myproduct">My Product</Link></li>
                </ul>
            </li>
        }
        <li><Link className='bg-colorYellowDk hover:text-white' to="/blog">Blog</Link></li>
    </React.Fragment>

    return (

        <div className="navbar bg-colorGray text-white">
            <div className="navbar-start py-2">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60 colorGray font-semibold text-sm tracking-wider uppercase">
                        {menuItems}
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link className='text-xl font-normal'>AS<span className='font-black '>FALL<span>9</span></span><sup className='colorYellow text-xl tracking-wide'> sell</sup></Link>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <>
                            <Link onClick={logOut} className='btn colorGray border-none rounded-none bg-colorYellow bg-colorYellowDk'> LogOut</Link>
                        </>
                        :
                        <>
                            <Link to="/login" className='btn colorGray border-none rounded-none bg-colorYellow bg-colorYellowDk'>Login</Link>
                            <Link to="/register" className='btn colorGray border-none rounded-none bg-colorYellow bg-colorYellowDk'> Register</Link>
                        </>
                }
            </div>
        </div>

    );
};

export default Header;