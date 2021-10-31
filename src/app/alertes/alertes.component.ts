import { Component, OnInit } from '@angular/core';
import { Alertes } from '../model/alertes.model';
import { AlertesService } from '../services/alertes.service';

@Component({
  selector: 'app-alertes',
  templateUrl: './alertes.component.html',
  styleUrls: ['./alertes.component.css']
})
export class AlertesComponent implements OnInit {
  alertes! : Alertes[];

  constructor(private alertesService: AlertesService ) { this.alertes = alertesService.listeAlertes(); }

  ngOnInit(): void {
  }

  supprimerAlertes(p: Alertes) {
    // console.log(p);
    let conf = confirm("Etes-vous sûr ?");
     if (conf)
    this.alertesService.supprimerAlertes(p);
    }


}
