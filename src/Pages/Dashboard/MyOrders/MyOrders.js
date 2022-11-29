import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const MyOrders = () => {
    const { user } = useContext(AuthContext);


    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: myorders = [] } = useQuery({
        queryKey: ['myorders', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead className='text-center'>
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
                    <tbody className='text-center'>

                        { myorders &&
                            myorders?.map(myorder => <tr key={myorder._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle object-cover w-12 h-12">
                                                <img src={myorder.productImg} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{myorder.product}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>${myorder.productPrice}</p>
                                </td>
                                <td>{myorder.meetingLocation}</td>
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