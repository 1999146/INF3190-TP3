import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau-admin',
  templateUrl: './tableau-admin.component.html',
  styleUrls: ['./tableau-admin.component.scss']
})
export class TableauAdminComponent implements OnInit {
  inscriptions = [
    {
      Enfant: "Simpson, Bart",
      Parent: "Simpson, Homer",
      Session: "2021",
      Programme: "L'enfant actif",
      Semaine: "Semaine 2",
      Paye: true
    },
    {
      Enfant: "Simpson, Lisa",
      Parent: "Simpson, Homer",
      Session: "2021",
      Programme: "Les arts et la science",
      Semaine: "Semaine 2",
      Paye: true
    },
    {
      Enfant: "Simpson, Bart",
      Parent: "Simpson, Homer",
      Session: "2021",
      Programme: "L'enfant actif",
      Semaine: "Semaine 3",
      Paye: false
    },
    {
      Enfant: "Simpson, Lisa",
      Parent: "Simpson, Homer",
      Session: "2021",
      Programme: "Les arts et la science",
      Semaine: "Semaine 3",
      Paye: true
    },
    {
      Enfant: "Simpson, Lisa",
      Parent: "Simpson, Homer",
      Session: "2021",
      Programme: "Les arts et la science",
      Semaine: "Semaine 4",
      Paye: true
    },
    {
      Enfant: "Simpson, Bart",
      Parent: "Simpson, Homer",
      Session: "2020",
      Programme: "L'enfant actif",
      Semaine: "Semaine 1",
      Paye: true
    },
    {
      Enfant: "Simpson, Lisa",
      Parent: "Simpson, Homer",
      Session: "2020",
      Programme: "Les arts et la science",
      Semaine: "Semaine 1",
      Paye: false
    },
    {
      Enfant: "Simpson, Bart",
      Parent: "Simpson, Homer",
      Session: "2020",
      Programme: "L'enfant actif",
      Semaine: "Semaine 2",
      Paye: true
    },
    {
      Enfant: "Simpson, Lisa",
      Parent: "Simpson, Homer",
      Session: "2020",
      Programme: "Les arts et la science",
      Semaine: "Semaine 2",
      Paye: true
    },
    {
      Enfant: "Marsh, Stanley",
      Parent: "Marsh, Randy",
      Session: "2021",
      Programme: "Le Classique",
      Semaine: "Semaine 1",
      Paye: true
    },
    {
      Enfant: "Marsh, Stanley",
      Parent: "Marsh, Randy",
      Session: "2021",
      Programme: "Le Classique",
      Semaine: "Semaine 5",
      Paye: true
    },
    {
      Enfant: "Marsh, Stanley",
      Parent: "Marsh, Randy",
      Session: "2020",
      Programme: "Le Classique",
      Semaine: "Semaine 1",
      Paye: true
    },
    {
      Enfant: "Marsh, Stanley",
      Parent: "Marsh, Randy",
      Session: "2020",
      Programme: "Le Classique",
      Semaine: "Semaine 2",
      Paye: true
    },
    {
      Enfant: "Marsh, Stanley",
      Parent: "Marsh, Randy",
      Session: "2020",
      Programme: "Le Classique",
      Semaine: "Semaine 8",
      Paye: false
    },
    {
      Enfant: "Marsh, Stanley",
      Parent: "Marsh, Randy",
      Session: "2020",
      Programme: "Le Classique",
      Semaine: "Semaine 9",
      Paye: true
    },
    {
      Enfant: "Marsh, Stanley",
      Parent: "Marsh, Randy",
      Session: "2019",
      Programme: "Le Classique",
      Semaine: "Semaine 10",
      Paye: true
    },
    {
      Enfant: "Cartman, Eric",
      Parent: "Cartman, Liane",
      Session: "2021",
      Programme: "Le Classique",
      Semaine: "Semaine 1",
      Paye: true
    },
    {
      Enfant: "Cartman, Eric",
      Parent: "Cartman, Liane",
      Session: "2021",
      Programme: "Le Classique",
      Semaine: "Semaine 3",
      Paye: true
    },
    {
      Enfant: "Cartman, Eric",
      Parent: "Cartman, Liane",
      Session: "2021",
      Programme: "Le Classique",
      Semaine: "Semaine 5",
      Paye: true
    },
    {
      Enfant: "Cartman, Eric",
      Parent: "Cartman, Liane",
      Session: "2020",
      Programme: "Le Classique",
      Semaine: "Semaine 1",
      Paye: true
    },
    {
      Enfant: "Cartman, Eric",
      Parent: "Cartman, Liane",
      Session: "2019",
      Programme: "Le Classique",
      Semaine: "Semaine 1",
      Paye: true
    },
    {
      Enfant: "Cartman, Eric",
      Parent: "Cartman, Liane",
      Session: "2018",
      Programme: "Le Classique",
      Semaine: "Semaine 1",
      Paye: true
    }
  ]

  parents = [
    {
      id: "Marsh, Randy",
      nom: "Marsh",
      prenom: "Randy",
      courriel: "randymarsh@southpark.com",
      motDePasse: "randy",
      adresse: "260 Avenue de los Mexicanos, Southpark",
      dateNaissance: "08/04/1949",
      photo: "../../assets/img/randy_mini.jpg"
    },
    {
      id: "Cartman, Liane",
      nom: "Cartman",
      prenom: "Liane",
      courriel: "lianecartman@southpark.com",
      motDePasse: "liane",
      adresse: "28201 E. Bonanza St., Southpark",
      dateNaissance: "12/02/1974",
      photo: "../../assets/img/liane_cartman_mini.jpg"
    },
    {
      id: "Simpson, Homer",
      nom: "Simpson",
      prenom: "Homer",
      courriel: "chunkylover53@aol.com",
      motDePasse: "doh",
      adresse: "742 Evergreen Terrace, Springfield",
      dateNaissance: "12/05/1956",
      photo: "../../assets/img/homer_mini.jpg"
    }
  ]

  enfants = [
    {
      id: "Marsh, Stanley",
      nom: "Marsh",
      prenom: "Stanley",
      dateNaissance: "19/10/2011",
      photo: "../../assets/img/stan_mini.jpg",
      parent: "Marsh, Randy"
    },
    {
      id: "Cartman, Eric",
      nom: "Cartman",
      prenom: "Eric",
      dateNaissance: "01/08/2011",
      photo: "../../assets/img/cartman_mini.jpg",
      parent: "Cartman, Liane"
    },
    {
      id: "Simpson, Bart",
      nom: "Simpson",
      prenom: "Bart",
      dateNaissance: "01/04/2011",
      photo: "../../assets/img/bart_mini.jpg",
      parent: "Simpson, Homer"
    },
    {
      id: "Simpson, Lisa",
      nom: "Simpson",
      prenom: "Lisa",
      dateNaissance: "09/05/2013",
      photo: "../../assets/img/lisa_mini.jpg",
      parent: "Simpson, Homer"
    }
  ]

  inscriptionSelectionnee = {Enfant: "", Parent: "", Session: "", Programme: "", Semaine: "", Paye: ""};
  parentSelectionnee = {id: "", nom: "", prenom: "", courriel: "", motDePasse: "", adresse: "", dateNaissance: "", photo: ""};
  enfantSelectionnee = {id: "", nom: "", prenom: "", dateNaissance: "", photo: "", parent: ""};
  constructor() {

  }

  ngOnInit(): void {

  }

  showModal(inscription: any){
    this.inscriptionSelectionnee = inscription;
    this.parents.forEach((parent) =>{
      if(parent.id == this.inscriptionSelectionnee.Parent){
        this.parentSelectionnee = parent;
      }
    });

    this.enfants.forEach((enfant) =>{
      if(enfant.id == this.inscriptionSelectionnee.Enfant){
        this.enfantSelectionnee = enfant;
      }
    });
  }

}
