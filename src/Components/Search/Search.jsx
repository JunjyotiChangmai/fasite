import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'

const Search = () => {
    const [datta, setData] = useState([]);
    const [errMsg, setErrMag] = useState();
    const { register, handleSubmit } = useForm();

    const handleRegistration = async(data) => {
        const userInfo = {userName: data.name};
        const url = "http://localhost:8000/search/person";
        
        await axios.post(url, userInfo).then((res) => {
            setData(res.data);
            setErrMag("")
        }).catch((Error)=> {
            setData([]);
            setErrMag("Not found")
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit(handleRegistration)}>
                <label>Username:</label>
                <input type="text" id="username" name="name" {...register('name')} required />
                <button type="submit" >Search</button>
                <div className="res">
                    <h2>{datta.userName}</h2>
                    <h2>{datta.fatherName}</h2>
                    <h2>{datta.generation}</h2>
                    <h2>{errMsg}</h2>
                </div>
            </form>
        </div>
    )
}

export default Search
