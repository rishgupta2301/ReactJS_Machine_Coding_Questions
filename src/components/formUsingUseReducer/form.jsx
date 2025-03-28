import { useReducer, useState } from "react";

const InitialState = {
    title: "", description: "", startDate: null, endDate: null
}

const Form = () => {

  const reducerFunction = (state, action) =>{
    const {type, payload} = action;

    switch (type) {
        case 'title':{
            return {...state, title:payload}
        }
        case 'description':{
            return {...state, description:payload}
        }
        case 'startDate':{
            return {...state, startDate:payload}
        }
        case 'endDate':{
            return {...state, endDate:payload}
        }    
    
        default:
            return state;
    }
  }

  // useReducer takes 2 arguments: 1: reducer function 2: InitialState
  // here event is the name of the object and dispatch is the function which is dispatching an action which is then
  // calling the reducer function which then checks the {type and payload} inside the action and update them accordingly 
  const [event, dispatch] = useReducer(
    reducerFunction, InitialState
  );

  return (
    <div>

      <input
        value={event.title}
        onChange={(e) => dispatch({ type:"title", payload: e.target.value })}
        placeholder="Event Title"
      />
      <input
        value={event.description}
        onChange={(e) => dispatch({ type:"description",payload: e.target.value })}
        placeholder="Event Description"
      />
      <input
        type="date"
        value={event.startDate || ""}
        onChange={(e) => dispatch({ type:"startDate",payload: e.target.value })}
      />
      <input
        type="date"
        value={event.endDate || ""}
        onChange={(e) => dispatch({ type:"endDate",payload: e.target.value })}
      />

        <p>Title: {event.title}</p>
        <p>Desc: {event.description}</p>
        <p>Start Date: {event.startDate}</p>
        <p>Start Date: {event.endDate}</p>

    </div>
  );
};

export default Form;
