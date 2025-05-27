package com.callOfCoder.service;


import com.callOfCoder.model.Todo;

import java.util.List;

public interface TodoService {
    List<Todo> getAll();

    Todo createTodo(Todo todo);

    void deleteTodoById(Long id) throws Exception;

}
