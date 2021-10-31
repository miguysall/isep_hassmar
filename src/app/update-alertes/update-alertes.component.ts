import { Alertes } from './../model/alertes.model';
import { Component, OnInit } from '@angular/core';
import { AlertesService } from '../services/alertes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-alertes',
  templateUrl: './update-alertes.component.html',
  styles: [
  ]
})
export class UpdateAlertesComponent implements OnInit {
  currentAlertes = new Alertes();
  constructor(
    private activatedRoute: ActivatedRoute,
     private router :Router,
     private alertesService: AlertesService) { }

  ngOnInit() { // console.log(this.route.snapshot.params.id);
     this.currentAlertes = this.alertesService.consulterAlertes(this.activatedRoute.snapshot.params.id); console.log(this.currentAlertes); }

     updateAlertes() { //console.log(this.currentProduit);
       this.alertesService.updateAlertes(this.currentAlertes);this.router.navigate(['alertes']);
      }

}
