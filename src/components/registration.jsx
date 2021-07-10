import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword]= useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
        // setEmail("");
        // setPassword("");
        // setFirstname("");
        // setLastname("");
        // setConfirmPassword("")
    };
    
    return(

        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (event) => setFirstname(event.target.value) } />

            </div>

            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) }  />

            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>

            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>

            <input type="submit" value="Create User" />

            <div> 
                <h3> Name: {firstname}, {lastname}</h3>
                <h3> Email: {email}</h3>
                <h3> Password: {password}</h3>
                <h3> Confirm Password: {confirmpassword}</h3>
            </div>
        </form>

    
    );
};
    
    


export default UserForm;