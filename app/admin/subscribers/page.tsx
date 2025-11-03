"use client"
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Background from "@/components/layout/Background";

const Subscribers = () => {

    const [users, setUsers] = useState([])

    const { id } = useParams();

    useEffect(() => {
        // axios.get("http://localhost:3001")
        // .then(response => setUsers(response.data))
        // .catch(err => console.log(err))
    }, [])

    const deleteUser = (id: any) => {
        // axios.delete("http://localhost:3001/deleteSubscriber/"+id)
        // .then(response => {
        //     console.log(response);
        //     window.location.reload();
        // })
        // .catch(err => console.log(err))
    }


  return (
    <>
    <Navbar />
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
                            <td className='px-10 py-2 border-b'>Name</td>
                            <td className='px-10 py-2 border-b text-[#FFFB00]'>Email</td>
                            <td className='px-10 py-2 border-b gap-3'>
                            <button className='bg-red-500 px-2 py-1 rounded-md'>Delete</button>
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
