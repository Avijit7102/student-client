import React from 'react';
import AllStudents from '../AllStudents/AllStudents';
import CreateStudent from '../CreateStudent/CreateStudent';
const Header = () => {
    return (
        <div>
            <h2 className="text-center mt-5 pt-5">Student Grading System : </h2>
            <div className = "row m-5">
                <div className = "col">
                    <AllStudents></AllStudents>
                </div>
                <div className = "col">
                    <CreateStudent></CreateStudent>
                </div>
            </div>
        </div>
    );
};

export default Header;