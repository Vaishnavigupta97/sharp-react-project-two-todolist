import React from "react";

const ShowTodoItem = (props) => {
   return(
  <React.Fragment>
    {props.abc.map((event) => {
        return <p key={event.id}>{event.gText}</p>;
    })}
  </React.Fragment>
   )
}
export default ShowTodoItem;