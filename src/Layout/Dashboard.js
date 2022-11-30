import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext/UserContext';
import useSeller from '../hooks/useSeller';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import Header from '../Pages/Shared/Header/Header';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [datas] = useSeller(user?.email);
    const [useA] = useAdmin(user?.email);
    const [useB] = useBuyer(user?.email);

    return (
        <div>
            <Header></Header>
            <div className='drawer drawer-mobile'>
                <input type="checkbox" name="" className='drawer-toggle' id="dashboard-drawer" />
                <div className='drawer-content'>
                    <Outlet></Outlet>
                </div>
                <div className='drawer-side'>
                    <label htmlFor='dashboard-drawer' tabIndex={2} className='drawer-overlay'></label>
                    <ul className='menu w-40 items-center bg-colorYellow text-base-content uppercase tracking-wider font-semibold text-sm'>
                       
                        {
                            useB?.category === "buyer" &&  <li><Link to="/dashboard">My Orders</Link></li>
                            
                        }
                        
                        {
                            useA?.category === "admin" && <>
                                <li><Link to="/dashboard/allusers">All Users</Link></li>
                                <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                            </>
                        }

                        {
                            datas?.category === "seller" && <>
                            <li><Link to="/dashboard/myproduct">My Product</Link></li>
                            <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                            </>
                        }

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;