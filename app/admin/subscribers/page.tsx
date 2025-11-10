"use client"

import { useState, useEffect } from "react";
import Background from "@/components/layout/Background";
import {Button} from "@/components/ui/button";

const Subscribers = ({ params }: { params: string}) => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        try {
            const fetchSubscribers = async () => {
                const response = await fetch("/api/subscribers");
                const data = await response.json();

                setUsers(data);
            }

            fetchSubscribers();

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, [])

    const deleteSubscriber = (params: string) => {
        try {
            const response = fetch(`/api/subscribers/delete/${params}`,{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (response.ok) {
                console.log(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    if (loading)  {
        console.log("Loading...");
    }


  return (
    <>
    <div className="container">
        <div className=' items-center'>
          <Background />
          <div className='md:w-[478px]'>
          <h1 className="text-white mt-10 font-bold text-lg md:text-2xl">Subscribers</h1>
          <table className='table-auto w-full bg-white border-collapse border-gray-300 text-white mt-10'>
            <thead>
                <tr>
                    <th className='px-10 py-2 border-b'>Name</th>
                    <th className='px-10 py-2 border-b'>Email</th>
                    <th className='px-10 py-2 border-b'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => {
                        return <tr key={index}>
                            <td className='px-10 py-2 border-b'>{user.name}</td>
                            <td className='px-10 py-2 border-b text-[#FFFB00]'>{user.email}</td>
                            <td className='px-10 py-2 border-b gap-3'>
                            <Button variant={"secondary"}
                            onClick={() => deleteSubscriber(params)}>Delete</Button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
            </table>
      </div>
      </div>
      </div>
    </>
  )
}

export default Subscribers
