import { useState } from "react";
import "./GoalForm.css";

const GoalForm = (props) => {
    const [goalText, setGoalText] = useState("");
    const [isValid, setIsValid] = useState(true);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const showFormSubmit = {
        gText : goalText,
    };
    if(showFormSubmit.gText.trim().length === 0){
        // console.log("bjn");
        setIsValid(false);
        return;
    }
    props.addFormInList(showFormSubmit);
    setGoalText("");
    // console.log("form is reunning");
  }
  const goalTextHandler = (event) => {
    if(event.target.value.trim().length > 0){
        setIsValid(true);
    }
    setGoalText(event.target.value);
  }
 return(
    <>
    <div className="formParent">
        <form onSubmit={formSubmitHandler}>
            <div className={`addCourse ${!isValid ? 'invalid' : ''}`}>
                <label>Course Goal</label>
                <input type="text" value={goalText} onChange={goalTextHandler}/>
            </div>
            <button className={`btnValid ${!isValid ? "btnInvalid" : ''}`} type="submit">Add Goal</button>
        </form>
    </div>
    </>
 )
}

export default GoalForm;