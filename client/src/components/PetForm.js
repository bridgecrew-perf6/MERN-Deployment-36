import React, { useState } from 'react'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
export default () => {

    const [name, setName] = useState(""); 
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");

    const history = useHistory();
    const [errors, setErrors] = useState([]);
    
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pet/new', {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3

        })
        .then(res=> {
            console.log(res);
            history.push('/');
        })
        .catch(err=> {
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        })
    }

    return (
        <div className="container">
            <h2>Add a Pet</h2>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name</label><br/>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/><br/>
                    <span className="error">{errors.name && errors.name.message}</span>
                </p>
                <p>
                    <label>Type</label><br/>
                    <input type="text" onChange={(e)=>setType(e.target.value)} value={type}/><br/>
                    <span className="error">{errors.type && errors.type.message}</span>
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/><br/>
                    <span className="error">{errors.description && errors.description.message}</span>
                </p>
                <p>
                    <label>Skill 1</label><br/>
                    <input type="text" onChange={(e)=>setSkill1(e.target.value)} value={skill1}/><br/>
                    <span className="error">{errors.skill1 && errors.skill1.message}</span>
                </p>
                <p>
                    <label>Skill 2</label><br/>
                    <input type="text" onChange={(e)=>setSkill2(e.target.value)} value={skill2}/><br/>
                    <span className="error">{errors.skill2 && errors.skill2.message}</span>
                </p>
                <p>
                    <label>Skill 3</label><br/>
                    <input type="text" onChange={(e)=>setSkill3(e.target.value)} value={skill3}/><br/>
                    <span className="error">{errors.skill3 && errors.skill3.message}</span>
                </p>
                <input className="btn btn-success" type="submit"/>
            </form>
            <Link className="btn btn-primary"to="/">Back to Pets</Link>
        </div>
    )
}

