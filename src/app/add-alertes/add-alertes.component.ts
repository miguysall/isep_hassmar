import { Component, OnInit } from '@angular/core';
import { Alertes } from '../model/alertes.model';
import { AlertesService } from '../services/alertes.service';

@Component({
  selector: 'app-add-alertes',
  templateUrl: './add-alertes.component.html',
  styleUrls: ['./add-alertes.component.css']
})
export class AddAlertesComponent implements OnInit {
  newAlertes = new Alertes();
  constructor(private alertesService: AlertesService) { }

  ngOnInit(): void {
  }

  addAlertes(){
    // console.log(this.newAlertes);
    this.alertesService.ajouterAlertes(this.newAlertes);
    }
}
