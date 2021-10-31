import { Alertes } from './../model/alertes.model';

import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AlertesService {
  [x: string]: any;

  alertes! : Alertes[];

  constructor() { this.alertes! = [
    {idAlertes : 1, niveauAlertes : "Urgent", dateAlertes : new Date("01/14/2021"),  creepar : "Police",  destinataire : "Hassmar", progression : 32},
    {idAlertes : 2, niveauAlertes : "Critique", dateAlertes : new Date("01/19/2021"),  creepar : "Douane",  destinataire : "Hassmar", progression : 60},
    {idAlertes : 3, niveauAlertes : "Mineur", dateAlertes : new Date("01/14/2021"),  creepar : "Gendarmerie",  destinataire : "Hassmar", progression : 10},
    {idAlertes : 4, niveauAlertes : "Majeur", dateAlertes : new Date("01/14/2011"),  creepar : "Police",  destinataire : "Hassmar", progression : 49},
]; }
listeAlertes():Alertes[]
{return this.alertes; }
ajouterAlertes( alertes: Alertes){ this.alertes.push(alertes); }


supprimerAlertes( alertes: Alertes){
  //supprimer le produit prod du tableau produits
   const index = this.alertes.indexOf(alertes, 0); if (index > -1) { this.alertes.splice(index, 1); }
    //ou Bien /* this.produits.forEach((cur, index) => { if(prod.idProduit === cur.idProduit) { this.produits.splice(index, 1); } }); */
  }

   trierAlertes(){ this.alertes = this.alertes.sort((n1,n2) => { if (n1.idAlertes > n2.idAlertes) { return 1; } if (n1.idAlertes < n2.idAlertes) { return -1; } return 0; }); }
   updateAlertes(p:Alertes) {
     // console.log(p);
      this.supprimerAlertes(p); this.ajouterAlertes(p); this.trierAlertes(); }


}

