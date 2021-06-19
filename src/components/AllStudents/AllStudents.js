import React, { useEffect, useState } from 'react';

const AllStudents = () => {
    const [student, setAllStudent] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7700/students')
            .then(res => res.json())
            .then(data => setAllStudent(data));
    }, [])

    const handleDeleteButton = (id) => {
        console.log("clicked", id);
        fetch(`http://localhost:7700/deleteStudent/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(res => {
            console.log("delete successfully!!!!!!!!");
        })

    }
    return (
        <div>
            <h4>All Students List</h4>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Grade</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    {
                        student.map(st =>
                            <tbody>
                                <tr>
                                    <td>{st.Name}</td>
                                    <td>{st.Age}</td>
                                    <td>{st.Gender}</td>
                                    <td>{st.Grade}</td>
                                    <td><button onClick={()=>handleDeleteButton(st._id)}>Delete</button></td>
                                </tr>

                            </tbody>
                        )
                    }

                </table>
            </div>
        </div>
    );
};

export default AllStudents;