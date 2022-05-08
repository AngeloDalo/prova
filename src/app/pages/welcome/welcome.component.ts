import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SalutiDataService } from 'src/services/data/saluti-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  utente: string = "";

  titolo: string = "Benvenuti in Alphashop";
  sottotitolo: string = "Visualizza le offerte del giorno";

  constructor(private route: ActivatedRoute, private SalutiSrv : SalutiDataService) { }

  ngOnInit(): void {

    this.utente = this.route.snapshot.params['userid'];
  }

  saluti : string = "";
  errore : string = "";

  getSaluti = () : void => {
    this.SalutiSrv.getSaluti(this.utente).subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this)
    });
  }

  handleResponse(response: Object) {
    this.saluti = response.toString();
  }

  handleError(error: Object) {
    this.errore = error.toString();
  }

}
