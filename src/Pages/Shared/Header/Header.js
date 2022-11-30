import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const Header = () => {
    const { logOut, user } = useContext(AuthContext);

    const menuItems = <React.Fragment>

        <li><Link className='bg-colorYellowDk hover:text-white' to="/home">Home</Link></li>
        <li><Link className='bg-colorYellowDk hover:text-white' to="/allcars">All Products</Link></li>
        <li><Link className='bg-colorYellowDk hover:text-white' to="/blog">Blog</Link></li>
        <li><Link className='bg-colorYellowDk hover:text-white' to="/dashboard">dashboard</Link></li>
    </React.Fragment>

    return (

        <div className="navbar bg-colorGray text-white">
            <div className="navbar-start py-2">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
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