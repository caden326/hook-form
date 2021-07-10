import React from 'react';



const Results = props =>{
const {firstname, lastname, email, password, confirmpassword} = props.data
return(
        <div>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmpassword}</p>
        </div>
);
};

export default Results;