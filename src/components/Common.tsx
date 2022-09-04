import { Navigate, Routes, Route, useNavigate } from "react-router-dom";
import FirstPage from "./FirstPage";
import ParentTask from "../TaskParent/ParentTask";
import NotFound from "./NotFound";
import Todo from "./Todo";

const Common = () => {
  const navigate = useNavigate();
  function basicPage() {
    // <Navigate to="/basic" replace={true} />
    navigate("/basic");
  }
  function todoPage() {
    // <Navigate to="/todo" replace={true} />
    navigate("/todo");
  }
  function parent(){
    // <Navigate to="/parent" replace={true} />
    navigate("/parent");
  }
  function notFound() {
    // <Navigate to="/todo" replace={true} />
    navigate("/notFound");
  }
  return (
    <div>
      <div className="alert alert-success">
        <h1>Where do you want to go ????</h1>
      </div>
      <div className="alert alert-info d-flex justify-content-between">
        <button className="btn btn-info" onClick={basicPage}>
          Basic Page
        </button>
        <button className="btn btn-info" onClick={todoPage}>
          TODO APP
        </button>
        <button className="btn btn-info" onClick={parent}>Parent Task</button>
        <button className="btn btn-info">Page 4</button>
        <button className="btn btn-danger" onClick={notFound}>Not Found</button>
      </div>
      <Routes>
        <Route path="/basic" element={<FirstPage />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/parent" element={<ParentTask />} />
        <Route path="/pageFour" element={<FirstPage />} />
        <Route path="/notFound" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Common;
