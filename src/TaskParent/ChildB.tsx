import React, { useEffect, useState, memo } from "react";
import { convertToObject } from "typescript";

const ChildB = ({ lName }: any) => {
  const [name, setName] = useState('');

  useEffect(() => {}, [name]);
  console.log("Child B Rendered")
  return (
    <div>
        <label htmlFor="last">
            Last Name : 
        </label>
      <input
        type="text"
        placeholder="enter last name"
        value={name}
        id="last"
        onChange={(event) => {
            setName(event.target.value);
            lName(event.target.value);
        }}
      />
    </div>
  );
};

export default memo(ChildB);
