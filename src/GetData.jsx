import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const GetData = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        alluser();
    }, []);

    const [isuser, setuser] = useState([]);
    const alluser = async () => {
        try {
            axios.get(`http://localhost/getData.php`)
                .then(res => {
                    setuser(res.data);
                })
        } catch (error) {
            throw error;
        }
    }


    // const deleteUser = async (id) => {
    //     if (window.confirm("Are you sure?")) {
    //         try {
    //             axios.post(`http://localhost/delete.php`, {
    //                 userids: id,
    //             })
    //                 .then(res => {
    //                     console.log(res, 'restvalue')
    //                     // setuser([]);
    //                     setuser(res.data);
    //                     alluser();
    //                     return;
    //                 })
    //         } catch (error) { throw error; }
    //     }
    // }
    return (
        <div>
            <h3>Fetch Data Successfully</h3>
            <Link to="/" class="btn btn-primary">Go To Save Data</Link>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {isuser.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.Name}</td>
                            <td>{item.age}</td>
                            <td>{item.Email}</td>
                            <td>{item.Phone}</td>
                            <td>
                                <button type="button" class="btn btn-link" >Delete</button>
                                <button type="button" class="btn btn-link">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GetData;