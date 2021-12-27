import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddTodoForm from "./Components/AddTodoForm";
import TotalItems from "./Components/TotalCompleteItems";
import TodoList from "./Components/TodoList";
//import Card from '@material-ui/core/Card';
//import CardContent from '@material-ui/core/CardContent';


function FirstPage() {
    return (
        //<Card className="bg-dark">
    <div className="container bg-info p-4 mt-5">
      <h1> My Task App</h1>
      <AddTodoForm />
      <TodoList />
      <TotalItems />
    </div> 
    //</Card>
  );
}

export default FirstPage