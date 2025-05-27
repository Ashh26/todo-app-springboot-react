package com.callOfCoder.controller;

import com.callOfCoder.model.ApiResponse;
import com.callOfCoder.model.Todo;
import com.callOfCoder.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping("/api")
    public ApiResponse homeController(){
        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setMessage("Welcome to Todo application");
        apiResponse.setStatus(true);
        return apiResponse;
    }

    @GetMapping("/api/todos")
    public List<Todo> getAll(){
        return todoService.getAll();
    }

    @PostMapping("/api/todos")
    public Todo createTodo(@RequestBody Todo todo){
        return todoService.createTodo(todo);
    }

    @DeleteMapping("/api/todos/{id}")
    public ApiResponse deleteTodo(@PathVariable Long id) throws Exception {
        todoService.deleteTodoById(id);
        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setMessage("todo deleted successfully");
        apiResponse.setStatus(true);
        return apiResponse;
    }

}
