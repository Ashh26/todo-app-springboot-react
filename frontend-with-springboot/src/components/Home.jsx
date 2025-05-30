import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Home = () => {
    const [title,setTitle]=useState([])
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/todos');
            setTodos(response.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const createTodo = async () => {
        const todo={title}
        try {
            const response = await axios.post('http://localhost:8080/api/todos', todo);
            setTodos([...todos, response.data]);
        } catch (error) {
            console.error('Error creating todo:', error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/todos/${id}`);
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    
  return (
    <div className="w-[50vw] h-[80vh] bg-white rounded-xl ">
      <div className="bg-[#18324d] p-5 flex gap-5 justify-center rounded-t-xl">
        <Input className="background-color: transparent" placeholder="Add New Task"
          type="text"
          onChange={(e)=>setTitle(e.target.value)} />
        <Button onClick={createTodo} className="py-2 px-5 rounded-md bg-[#1c521a]">Add</Button>
      </div>
      <h1 className="text-black text-center pt-10 font-bold">List Of Todo</h1>
      <div className="p-5 space-y-2 overflow-y-auto h-[60vh]">
       {todos.map((item,index)=> <div className="bg-[#99AAAB] p-3 rounded-md flex items-center justify-between">
          <div className="">
            <p className="text-gray-900 text-sm">
              {index+1}. {item.title}.
            </p>
          </div>
          <div className="flex space-x-4">
            <button
            onClick={()=>deleteTodo(item.id)}
              className="text-red-600 hover:text-white focus:outline-none rounded-full hover:bg-red-600 p-2"
              aria-label="Delete"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            {/* <button class="text-green-400 hover:bg-green-400 hover:text-white rounded-full focus:outline-none focus:text-green-600 p-2" aria-label="Check">
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </button> */}
          </div>
        </div>) }
      </div>
    </div>
  );
};