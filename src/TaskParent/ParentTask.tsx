import React, { useEffect, useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const ParentTask = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    useEffect(()=>{
        
    },[firstName]);

    useEffect(()=>{

    },[ChildA]);

    return (<div>
        <h3 className="alert alert-warning">
        Testing the child component rendering
        </h3>
        <div className="alert alert-danger">
            Student First Name is : {firstName} <br/>
            Student Last Name is : {lastName}

            <ChildA fName={setFirstName}/>
            <ChildB lName={setLastName}/>
        </div>
    </div>)
}

export default ParentTask;