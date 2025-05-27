package com.callOfCoder.service.impl;

import com.callOfCoder.model.Todo;
import com.callOfCoder.repository.TodoRepository;
import com.callOfCoder.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoRepository todoRepository;

    @Override
    public List<Todo> getAll() {
        return todoRepository.findAll();
    }

    @Override
    public Todo createTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    @Override
    public void deleteTodoById(Long id) throws Exception {

        Todo todoId = todoRepository.findById(id).orElseThrow(()->new Exception("id not found"));

        todoRepository.delete(todoId);
    }
}
