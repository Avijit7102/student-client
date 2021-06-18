import React from 'react';
import { useForm } from "react-hook-form";

const CreateStudent = () => {
    const inputField = {
        width:"80%",
        margin: "2px 0px",
        padding: "5px",
        borderRadius: "10px",
        fontFamily:"inherit"
    };
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const studentInfo = {
            Name: data.firstName + ' ' + data.lastName,
            Gender : data.gender,
            Age: data.age,
            Grade: data.grade
        }
        console.log('student info : ', studentInfo);
        const url = "http://localhost:7700/addStudent";
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(studentInfo)
        })
        .then(res => console.log('server side res', res))
    };
    return (
        <div>
            <h4 className="border m-1 p-1">Create Student</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p> First Name : <input style={inputField} {...register("firstName")}/> </p>
                <p> Last Name : <input style={inputField} label="Last Name..."{...register("lastName")} /> </p>
                <p> Gender :<select style={inputField} {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select></p>
                <p>Age : <input className="ml-5" style={inputField} label="Age..."{...register("age")} /></p>
                <br />
                <p>Grade : <input style={inputField} label="Grade..."{...register("grade")} /></p>
                <input className="w-75 p-2" type="submit" />
            </form>
        </div>
    );
};

export default CreateStudent;