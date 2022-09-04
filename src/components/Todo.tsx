import { useState, useEffect } from "react";

const Todo = () => {
  const [inputField, setInputField] = useState("");
  const [inputArray, setInputArrray] = useState<any>([]);
  const [completed, setCompleted] = useState<any>([]);
  useEffect(() => {}, [inputField]);

  const fetchInputData = () => {
    if (inputField.length > 0) {
      const temp = inputField;
      inputArray.push(temp);
      setInputArrray([...inputArray]);
      setInputField("");
    } else {
      window.alert("Please enter List");
    }
  };
  useEffect(() => {
  }, [inputArray]);

  useEffect(()=>{
  },[completed]);

  /**
   * Add to the completed array list and remove clicked element
   * @param indexing 
   */
  function checkBoxFunction(indexing: any) {
    const text: any = inputArray[indexing];
    console.log("clicked index:", inputArray[indexing]);
    let tempIndex = inputArray.indexOf(inputArray[indexing]);
    console.log("tempIndex is :", tempIndex);
    if (tempIndex > -1) {
      // only splice array when item is found
      completed.push(text);
      setCompleted([...completed]);
      inputArray.splice(tempIndex, 1); // 2nd parameter means remove one item only
    }
    setInputArrray([...inputArray]);
  }

  /**
   * Add to the todo array list and remove clicked element from completed
   * @param indexing 
   */
  function completedFunction(indexing: any){
    const text: any = completed[indexing];
    console.log("clicked index:", completed[indexing]);
    let tempIndex = completed.indexOf(completed[indexing]);
    console.log("tempIndex is :", tempIndex);
    if (tempIndex > -1) {
      // only splice array when item is found
      inputArray.push(text);
      setInputArrray([...inputArray]);
      completed.splice(tempIndex, 1); // 2nd parameter means remove one item only
    }
    setCompleted([...completed]);
  }
  return (
    <div className="d-flex flex-column">
      <h2 className="alert alert-info">Todo Page</h2>

      <div className="inputDiv">
        <input
          type="text"
          placeholder="Enter the list"
          className="form-control"
          value={inputField}
          onChange={(event) => {
            if (event.target.value !== "") {
              setInputField(event.target.value);
            }
          }}
        />
        <button
          className="btn btn-success mt-3"
          type="submit"
          onClick={fetchInputData}
        >
          Add List
        </button>
      </div>

      <h4 className="align-item-center">Alligned TASK</h4>

      {inputArray.map((event: any, index: any) => {
        return (<div className="displayList row alert alert-warning w-75 align-item center">
            <div className="col-8 h4">
              <span className="mx-4">{index + 1 + "."}</span>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id={index}
                checked={false}
                onClick={() => {
                  checkBoxFunction(index);
                }}
              />
              <label className="form-check-label mt-1" htmlFor="dummy">
                {event}
              </label>
            </div>
            <div className="col-2 h4">
              <button className="btn btn-info">Edit</button>
            </div>
            <div className="col-2 h4">
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        );
      })}
        <h4 className="align-item-center">COMPLETED TASK</h4>
      {completed.map((event: any, index: any) => {
        console.log(event);
        return (
          <div>
            <div className="displayList row alert alert-warning w-75 align-item center">
              <div className="col-6 h4">
                <span className="mx-4">{index + 1 + "."}</span>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={event}
                  id={index}
                  checked={true}
                  onClick={() => {
                    completedFunction(index);
                  }}
                />
                <label className="form-check-label mt-1 text-decoration-line-through" htmlFor="dummy">
                  {event}
                </label>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
