import { Component, OnInit } from '@angular/core';
import { FicheParent } from 'src/app/classes/module-json/fiche-parent';
import { Enfant } from '../../classes/enfant';
import { Parent } from '../../classes/parent';
import {AuthService} from "../../services/auth.service";
import * as ficheParent from "../../../data/parent.json";

@Component({
  selector: 'app-section-parent-profil',
  templateUrl: './section-parent-profil.component.html',
  styleUrls: ['./section-parent-profil.component.scss']
})
export class SectionParentProfilComponent implements OnInit {

  parent: FicheParent.IParent = ficheParent;

  constructor(public authService: AuthService) {
    // this.parent = authService.user;

    // this.parent = new Parent(
    //   "0",
    //   "Simpson",
    //   "Homer",
    //   "simpson.homer@gmail.com",
    //   "123 rue Springfield",
    //   "1960-04-08",
    //   "../../assets/img/profil.png",
    // );

    // this.parent.enfants.push(new Enfant(
    //   "1",
    //   "Simpson",
    //   "Lisa",
    //   "1990-06-09",
    //   "../../assets/img/profil.png",
    //   "")
    // );

    // this.parent.enfants.push(new Enfant(
    //   "2",
    //   "Simpson",
    //   "Bart",
    //   "1994-08-21",
    //   "../../assets/img/bart_mini.jpg",
    //   "")
    // );

    this.parent.enfants.push(new Enfant(
      "3",
      "Simpson",
      "Maggie",
      "1999-05-12",
      "../../assets/img/profil.png",
      "")
    );

  // console.log(parent);
  // const data = JSON.stringify(parent);
  // console.log(data);

  }

  ngOnInit(): void {
  }

}
