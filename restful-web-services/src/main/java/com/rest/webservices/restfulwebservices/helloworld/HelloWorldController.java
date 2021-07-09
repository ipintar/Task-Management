package com.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:4200/")
@RestController
public class HelloWorldController {

    @GetMapping(path="/hello-world")
    public String helloWorld(){
        return "Hello world";
    }

    @GetMapping(path="/hello-world-bean")
    public HelloWorldBean helloWorldBean(){
        //throw new RuntimeException("Some Error has Happened! Contact me for support");
        return new HelloWorldBean("Hello world - changed");
    }

    @GetMapping(path="/hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
        return new HelloWorldBean(String.format("Hello world, %s", name));
    }

}
