import React from 'react';
import {useSelector} from "react-redux";
import dateFormat, { masks } from "dateformat";

const UserList = () => {

    const userList = useSelector((state)=>state.user.userList);

    console.log(userList)

    return (
        <main>
            <h2 className={'text-2xl font-medium'}>User List</h2>
            <div className={"divider"}></div>
            <section>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox"/>
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Enrolled</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>


                            {
                                userList.map((item,i)=>{
                                    return (
                                        <tr key={i}>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox"/>
                                            </label>
                                        </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item['photo']}
                                                         alt="Avatar Tailwind CSS Component"/>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item['fullName']}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {
                                            item['role'] === "admin"?(<span className="badge bg-sky-200 badge-sm">{item?.['role']}</span>)
                                                :
                                                (<span className="badge bg-red-200 badge-sm">{item?.['role']}</span>)
                                        }
                                    </td>
                                    <td>{dateFormat(item['createdAt'], "mmmm d, yyyy")}</td>
                                    <th>
                                        {
                                            item['role'] === "admin" ?
                                                <></> :
                                                <button className="btn btn-error text-base-100 btn-xs">Remove
                                                    user</button>
                                        }
                                    </th>
                                        </tr>
                                )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
};

export default UserList;