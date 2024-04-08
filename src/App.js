// import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import GoalForm from "./components/GoalForm";
import ShowTodoItem from "./components/ShowTodoItem";

function App() {
  const [addList, setAddList] = useState([]);
  const formList = (addData) =>{
    setAddList((prevData) => {
      return [...prevData, addData];
    })
  }
  return (
    <div className="App">
      <GoalForm addFormInList={formList} />
      <ShowTodoItem abc={addList} />
    </div>
  );
}

export default App;
