import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, setTodo, updateTodo} from "./todosReducer";
import {Button, FormControl, ListGroupItem} from "react-bootstrap";
import {RootState} from "../../store";

export default function TodoForm() {
    const {todo} = useSelector((state: RootState) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <ListGroupItem className="d-flex align-items-center gap-2">
            <FormControl
                defaultValue={todo.title}
                onChange={(e) => dispatch(setTodo({...todo, title: e.target.value}))}/>
            <Button variant="success" onClick={() => dispatch(addTodo(todo))}
                    id="wd-add-todo-click"> Add </Button>
            <Button variant="warning" onClick={() => dispatch(updateTodo(todo))}
                    id="wd-update-todo-click"> Update </Button>
        </ListGroupItem>
    );
}

