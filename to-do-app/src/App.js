import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Active from "./To Do App/Active";
import AllTask from "./To Do App/AllTask";
import Completed from "./To Do App/Completed";
import Todo from './To Do App/todo'
// import Posts from "./VeridicCode/Posts";



function App(){

  const [Items,setItems]=useState(0);

  function countItems(count){
    setItems(count);
  }


  return(
    <div>

      <Routes>
        <Route path="/" element={<Todo items={Items}/>}>
          <Route path="/" element={<AllTask setitem={countItems}/>}/>
          <Route path="Active" element={<Active setitem={countItems}/>}/>
          <Route path="Completed" element={<Completed setitem={countItems}/>}/>
        </Route>
      </Routes>
    </div>
  );
}


export default App;
