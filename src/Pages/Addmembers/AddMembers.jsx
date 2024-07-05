import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';


const AddMembers = () => {
    const { register, handleSubmit } = useForm();

    const handleRegistration = async(data) => {   
        const url = "http://localhost:8000/api/add";
        const userInfo = {
            userName: data.userName,
            fatherName: data.fatherName
        }

        await axios.post(url, userInfo).then((res) => {
            if(res.data.msg === "exist") {
                alert("Already Exist...")
            }
            else {
                alert("Member added"); 
            }
        }).catch((err) => {
            alert(err);
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit(handleRegistration)}>
                <label>Name: </label>
                <input type="text" name="userName" {...register("userName")} required/>

                <label>Father's Name: </label>
                <input type="text" name="fatherName" {...register("fatherName")} required />

                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddMembers
