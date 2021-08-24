import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(user: any, password: any){
    if (user==="user" && password=== "user"){
      sessionStorage.setItem('authenticatedUser', user);
      return true;
    }
    else return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user ===null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
