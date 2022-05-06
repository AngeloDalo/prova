import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = "Nicola";
  password: string = "";
  autenticato: boolean = true;
  // consentito: boolean = false; //una volta imparato il routing non serve più
  errMsg: string = "Spiacente, la useris e/o la password sono errati";
  okMsg: string = "Accesso consentito";

  titolo: string = "Accesso e autenticazione";
  sottotitolo: string = "Procedi ad inserire la userId e password";

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  gestAut() {
    console.log(this.userId);
    if (this.userId === "Nicola" && this.password === "123_Stella") {
      this.route.navigate(['welcome', this.userId]); //passo il parametro
      this.autenticato = true;
      // this.consentito = true;
    } else {
      this.autenticato = false;
      // this.consentito = false;
    }
  }
}
