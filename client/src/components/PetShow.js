import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';


const PetShow = (props) => {
    const [info, setInfo] = useState("");
    const {id} = useParams();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pet/one/" + id )
        .then( res => {
            setInfo(res.data);
        })
    }, [info])

    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/api/pet/delete/' + petId)
            .then(res => {
                const newInfo = info.filter(pet => pet._id != petId);
                setInfo(newInfo);
            })
            .catch(err => console.error(err));
    }

    return(
    <div>
        <h1>Pet Shelter</h1>
        <Link to={"/"}><button className="btn btn-danger" onClick={(e)=>{deletePet(id)}}>Adopt {info.name}!</button></Link>
        <h2>Details about: {info.name}</h2><br/>
        <h2>Pet Type: {info.type}</h2><br/>
        <h2>Pet Description:{info.description}</h2><br/>
        <h2>Skills:</h2>
        <h2>{info.skill1}</h2>
        <h2>{info.skill2}</h2>
        <h2>{info.skill3}</h2>
        <Link to={"/"}><button className="btn btn-primary">Pet List</button></Link>
    </div>
    )
}
export default PetShow