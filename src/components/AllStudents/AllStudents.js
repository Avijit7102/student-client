import React, { useEffect, useState } from 'react';

const AllStudents = () => {
    const [student, setAllStudent] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7700/students')
            .then(res => res.json())
            .then(data => setAllStudent(data));
    }, [])
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