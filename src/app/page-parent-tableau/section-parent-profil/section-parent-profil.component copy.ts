// import { Component, OnInit } from '@angular/core';
// import { ModuleFicheParent } from 'src/app/classes/module-json/module-fiche-parent';
// import { Enfant } from '../../classes/enfant';
// import { Parent } from '../../classes/parent';
// import {AuthService} from "../../services/auth.service";
// import * as ficheParent from "../../../data/parent.json";
// import { FicheParent } from 'src/app/classes/fiche-parent';

// @Component({
//   selector: 'app-section-parent-profil',
//   templateUrl: './section-parent-profil.component.html',
//   styleUrls: ['./section-parent-profil.component.scss']
// })
// export class SectionParentProfilComponent implements OnInit {

//   // parent: ModuleFicheParent.IParent = ficheParent;

//   ficheParent1: FicheParent;
//   parent: Parent;

//   ficheParent2: FicheParent;
//   parent2: Parent;

//   fichesParents: FicheParent[] = new Array<FicheParent>();

//   constructor(public authService: AuthService) {
//     // this.parent = authService.user;

//     this.parent = new Parent(
//       "0",
//       "Simpson",
//       "Homer",
//       "simpson.homer@gmail.com",
//       "123 rue Springfield",
//       "1960-04-08",
//       "../../assets/img/profil.png",
//     );

//     this.parent.enfants.push(new Enfant(
//       "1",
//       "Simpson",
//       "Lisa",
//       "1990-06-09",
//       "../../assets/img/profil.png",
//       "")
//     );

//     this.parent.enfants.push(new Enfant(
//       "2",
//       "Simpson",
//       "Bart",
//       "1994-08-21",
//       "../../assets/img/bart_mini.jpg",
//       "")
//     );

//     this.ficheParent1 = new FicheParent(
//       "homer", "beignes", this.parent
//     )
//     this.fichesParents.push(this.ficheParent1);



//     this.parent2 = new Parent(
//       "0",
//       "Flanders",
//       "Ned",
//       "flanders.ned@gmail.com",
//       "125 rue Springfield",
//       "1960-03-13",
//       "../../assets/img/profil.png",
//     );

//     this.parent2.enfants.push(new Enfant(
//       "11",
//       "Flanders",
//       "Rod",
//       "1991-07-10",
//       "../../assets/img/profil.png",
//       "")
//     );

//     this.parent2.enfants.push(new Enfant(
//       "12",
//       "Flanders",
//       "Todd",
//       "1995-02-27",
//       "../../assets/img/profil.png",
//       "")
//     );

//     this.ficheParent2 = new FicheParent(
//       "ned", "jesus", this.parent2
//     )
//     this.fichesParents.push(this.ficheParent2);



//     // this.parent1.enfants.push(new Enfant(
//     //   "3",
//     //   "Simpson",
//     //   "Maggie",
//     //   "1999-05-12",
//     //   "../../assets/img/profil.png",
//     //   "")
//     // );



//   }

//   ngOnInit(): void {
//   }

//   exportJson() {
//     // console.log(parent);
//     const data = JSON.stringify(this.fichesParents);
//     console.log(data);
//   }

// }
