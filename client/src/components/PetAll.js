import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PetAll = (props) => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/pet")
            .then(res => {
                res.data.sort((a, b)=>{ 
                if(a.type > b.type){
                    return 1
                }
                if(a.type < b.type){
                    return -1
                }
                if(a.type == b.type){
                    return 0
                }
                })
                setInfo(res.data);
            })
            .catch(err => { console.log(err) })
    }, [info])

    return (
        <div className="App">
            <h1>Pet Shelter</h1>
            <Link to={'/pet/create'}> <button className="btn btn-primary"> Add a Pet </button> </Link>
            <h2>These pets are looking for a good home</h2>
            <table className="table">
                <thead>
                    <th scope="col"> Name </th>
                    <th scope="col"> Type </th>
                    <th scope="col"> Actions </th>
                </thead>
                <tbody>
                    {info.map((pet, i) => {
                        return (
                            <tr key={i}>
                                <td>
                                    <h3>{pet.name}</h3>
                                </td>
                                <td>
                                    <h3>{pet.type}</h3>
                                </td>
                                <td>
                                    <Link to={`/pet/one/${pet._id}`}className="btn btn-primary">Details</Link>|
                                    <Link to={`/pet/edit/${pet._id}`}className="btn btn-warning">Edit</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default PetAll