import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'

const Search = () => {
    const [datta, setData] = useState([]);
    const [errMsg, setErrMag] = useState();
    const { register, handleSubmit } = useForm();

    const handleRegistration = async(data) => {
        const userInfo = {userName: data.name};
        const url = "http://localhost:8000/api/search/person";
        
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
                <input type="text" name="name" {...register('name')} required />
                <button type="submit" >Search</button>
                <div className="res">
                    <div>{datta.userName}</div>
                    <div>{datta.fatherName}</div>
                    <div>{datta.generation}</div>
                    <div>{errMsg}</div>
                </div>
            </form>
        </div>
    )
}

export default Search
