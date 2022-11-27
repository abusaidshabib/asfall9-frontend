import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/myorders?email=${user?.email}`;

    const { data: myorders = [] } = useQuery({
        queryKey: ['myorders', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <div className="flex items-center space-x-3">
                                    <div>Image</div>
                                    <div>Name</div>
                                </div>
                            </th>
                            <th>price</th>
                            <th>Location</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myorders?.map(myorder => <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle object-cover w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{myorder.length}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>$price</p>
                                </td>
                                <td>Location</td>
                                <th>
                                    <Link className='btn colorGray border-none rounded-none bg-colorYellow bg-colorYellowDk'>Payment</Link>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;