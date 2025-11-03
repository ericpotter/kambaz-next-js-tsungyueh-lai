import {Button, ListGroupItem} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {deleteTodo, setTodo} from "./todosReducer";


export default function TodoItem({todo}: {
    todo: { id: string; title: string };
}) {
    const dispatch = useDispatch();
    return (
        <ListGroupItem key={todo.id} className="d-flex align-items-center gap-2">
            <Button variant="danger" onClick={() => dispatch(deleteTodo(todo))}
                    id="wd-delete-todo-click">
                Delete
            </Button>
            <Button variant="primary" onClick={() => dispatch(setTodo(todo))}
                    id="wd-set-todo-click">
                Edit
            </Button>
            {todo.title}
        </ListGroupItem>
    );
}