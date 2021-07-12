package com.rest.webservices.restfulwebservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200/")
@RequestMapping("users")
@RestController
public class TodoResource {

    @Autowired
    private TodoHardcodedService todoService;

    @GetMapping("/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){
        return todoService.finAll();
    }

    @GetMapping("/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id){
        return todoService.findByID(id);
    }

    @DeleteMapping("/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(
            @PathVariable String username, @PathVariable long id){

        Todo todo = todoService.deleteById(id);

        if(todo!=null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(
            @PathVariable String username,
            @PathVariable long id, @RequestBody Todo todo){

        Todo todoUpdated = todoService.save(todo);

        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @PostMapping("/{username}/todos")
    public ResponseEntity<Void> updateTodo(
            @PathVariable String username, @RequestBody Todo todo){

        Todo createdTodo = todoService.save(todo);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }
}
