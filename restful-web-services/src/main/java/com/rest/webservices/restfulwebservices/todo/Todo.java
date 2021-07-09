package com.rest.webservices.restfulwebservices.todo;

import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;
import java.util.Objects;

@Entity
public class Todo {

    @Id
    @GeneratedValue
    private Long id;

    private String username;
    private String description;
    private Date TargetDate;
    private Boolean isDone;

    protected Todo(){

    }

    public Todo(Long id, String username, String description, Date targetDate, Boolean isDone) {
        super();
        this.id = id;
        this.username = username;
        this.description = description;
        TargetDate = targetDate;
        this.isDone = isDone;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getTargetDate() {
        return TargetDate;
    }

    public void setTargetDate(Date targetDate) {
        TargetDate = targetDate;
    }

    public Boolean getDone() {
        return isDone;
    }

    public void setDone(Boolean done) {
        isDone = done;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Todo todo = (Todo) o;
        if (id != ((Todo) o).id)
            return false;
        return true;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
