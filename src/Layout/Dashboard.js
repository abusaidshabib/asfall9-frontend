import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <div className='drawer drawer-mobile'>
                <input type="checkbox" name="" className='drawer-toggle' id="dashboard-drawer" />
                <div className='drawer-content'>
                    <Outlet></Outlet>
                </div>
                <div className='drawer-side'>
                    <label htmlFor='dashboard-drawer' className='drawer-overlay'></label>
                    <ul className='menu w-80 bg-colorYellow text-base-content uppercase tracking-wider font-semibold text-sm'>
                        <li><Link to="/dashboard">My Orders</Link></li>
                        <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                        <li><Link to="/dashboard/myproduct">My Product</Link></li>
                        <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                        <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                        <li><Link to="/dashboard/allusers">All Users</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;