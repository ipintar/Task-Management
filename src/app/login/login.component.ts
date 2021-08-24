import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='user'
  password='user'
  err = 'Invalid credentials'
  invalidLogin = false

  constructor(private router: Router,
    public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){

    //console.log(this.username);
    //if (this.username==="user" && this.password=== "user"){
    if (this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    } else{
      this.invalidLogin = true
    }
  }
}
