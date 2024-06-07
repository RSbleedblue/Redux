import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./TodoList";
import { addTodo, editTodo } from "../Redux/Slices/TodoSlice";

const Home = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.Todo.todos) || [];
    const [eachTodo, setEachTodo] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    const handleSubmit = () => {
        if (eachTodo.trim() !== "") {
            if (editIndex !== null) {
                dispatch(editTodo({ index: editIndex, val: eachTodo }));
                setEditIndex(null);  
            } else {
                dispatch(addTodo(eachTodo));
            }
            setEachTodo("");  
        }
    };

    return (
        <>
            <div className="w-full flex flex-col mt-10 items-center justify-center">
                <p className="text-2xl font-semibold text-blue-900">Todo List</p>
                <div className="w-[40%] flex flex-col mt-2 gap-2">
                    <input 
                        className="focus:outline-none border border-solid border-slate-800 rounded-lg p-2" 
                        placeholder="Enter your Todo" 
                        value={eachTodo} 
                        onChange={(e) => setEachTodo(e.target.value)}
                    />
                    <div className="flex gap-2">
                        <button className="p-2 bg-green-600 rounded-lg text-white text-sm" onClick={handleSubmit}>
                            {editIndex !== null ? "Update" : "Submit"}
                        </button>
                        <button 
                            className="p-2 bg-green-600 rounded-lg text-white text-sm" 
                            onClick={() => { setEachTodo(""); setEditIndex(null); }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
                {
                    todoList.map((each, idx) => (
                        <TodoList 
                            Todos={each} 
                            key={idx} 
                            id={idx} 
                            setEachTodo={setEachTodo} 
                            setEditIndex={setEditIndex} 
                        />
                    ))
                }
            </div>
        </>
    );
}

export default Home;
