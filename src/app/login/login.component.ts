import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId = "Nicola"
  password = ""

  constructor() { }

  ngOnInit(): void {
  }

  gestAut() {
    console.log(this.userId);
    console.log(this.password);
  }
}