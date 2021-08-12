import { Component, OnInit } from '@angular/core';
import { Enfant } from '../classes/enfant';
import { Parent } from '../classes/parent';

@Component({
  selector: 'app-section-parent-profil',
  templateUrl: './section-parent-profil.component.html',
  styleUrls: ['./section-parent-profil.component.scss']
})
export class SectionParentProfilComponent implements OnInit {

  parent: Parent;

  constructor() {
    this.parent = new Parent(
      "0",
      "Simpson", 
      "Homer", 
      "simpson.homer@gmail.com", 
      "123 rue Springfield", 
      new Date("1960-04-08"), 
      "../../assets/img/profil.png", 
    );

    this.parent.ajouterEnfant(new Enfant(
      "1", 
      "Simpson", 
      "Lisa", 
      new Date("1990-06-09"), 
      "../../assets/img/profil.png", 
      "")
    );

    this.parent.ajouterEnfant(new Enfant(
      "2", 
      "Simpson", 
      "Bart", 
      new Date("1994-08-21"), 
      "../../assets/img/bart_mini.jpg", 
      "")
    );

  }

  ngOnInit(): void {
  }

}
