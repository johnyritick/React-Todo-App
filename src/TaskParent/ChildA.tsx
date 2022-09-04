import React, { useEffect, useState, memo } from "react";

function ChildA({fName}: any) {
  const [name, setName] = useState("");

  useEffect(()=>{
  },[name]);
  console.log("Child AAAAAAAAAAAAAAAAAAAAAAAAAAAAA Rendered");
  return (
    <div>
      <label htmlFor="name">Enter the first name : 
        <input
          type="text"
          placeholder="enter first name"
          value={name}
          id="name"
          onChange={(event) => {
            setName(event.target.value);
            fName(event.target.value);
          }}
        />
      </label>
    </div>
  );
};

export default memo(ChildA);
