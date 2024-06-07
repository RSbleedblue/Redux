import { useDispatch } from "react-redux";
import { deleteTodo } from "../Redux/Slices/TodoSlice";

const TodoList = ({ Todos, id, setEachTodo, setEditIndex }) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    const handleEdit = () => {
        setEachTodo(Todos);
        setEditIndex(id);
    }

    return (
        <>
            <div className="w-[40%] flex flex-wrap justify-between border border-dotted border-rose-900 p-2 rounded-lg mt-2">
                <p>{Todos}</p>
                <div className="flex gap-2">
                    <button className="p-2 bg-green-700 text-sm rounded-lg text-white" onClick={handleEdit}>Edit</button>
                    <button className="p-2 bg-red-600 text-sm rounded-lg text-white" onClick={() => handleDelete(id)}>Delete</button>
                </div>
            </div>
        </>
    );
}

export default TodoList;
