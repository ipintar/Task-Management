package com.rest.webservices.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList();
    private static long idCounter=0;

    static {
        todos.add(new Todo(++idCounter,"user", "Learn do Java",new Date(),false));
        todos.add(new Todo(++idCounter,"user", "Learn do JS",new Date(),false));
        todos.add(new Todo(++idCounter,"user", "Learn do SQL",new Date(),false));
    }


    public List<Todo> finAll(){
      return todos;
    }

    public Todo save(Todo todo){
        if(todo.getId()==-1){
            todo.setId(++idCounter);
            todos.add(todo);
        }else{
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }

    public Todo deleteById(long id){
        Todo todo = findByID(id);
        if(todo==null) return null;
        todos.remove(todo);
        if(todos.remove(todo)){
            return todo;
        }
        return null;
    }

    public Todo findByID(long id) {
        for(Todo todo:todos){
            if(todo.getId()==id){
                return todo;
            }
        }
     return null;
    }
}
