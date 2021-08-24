import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
     return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  executeHelloWorldServiceWithPathVariable(name: any){
    let basicAuthHeaderString= this.createBasicAutenticationHttpHeader();

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,{headers});
 }
  
 createBasicAutenticationHttpHeader(){
  let username ='user'
  let password ='password'
  let basicAuthHeaderString='Basic ' + window.btoa(username + ':' + password)
  return basicAuthHeaderString;
 }
   
 
 //Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/user' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
}
