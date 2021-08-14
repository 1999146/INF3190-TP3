// import { Component, OnInit } from '@angular/core';
// import { ModuleFicheParent } from 'src/app/classes/module-json/module-fiche-parent';
// import { Enfant } from '../../classes/enfant';
// import { Parent } from '../../classes/parent';
// import {AuthService} from "../../services/auth.service";
// import * as ficheParent from "../../../data/parent.json";
// import { FicheParent } from 'src/app/classes/fiche-parent';

import inscriptionParent from "src/data/inscription-parent";

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


// this.gabaritProgrammes.push(new GabaritProgramme(
//   "G0",
//   "Classique",
//   "Le classique comprend chaque jour un bloc d’activités de type sportif et un autre avec une activité de type art et une activité de type science."
// ));

// this.gabaritProgrammes.push(new GabaritProgramme(
//   "G1",
//   "Enfant actif",
//   "Le programme athlétique est un camp de jour sportif intensif pour les enfants très actifs. Il comprend au moins quatre activités quotidiennes dont le basketball, le tennis, le soccer, le ballon chasseur, le baseball, etc."
// ));

// this.gabaritProgrammes.push(new GabaritProgramme(
//   "G2",
//   "Arts et sciences",
//   "Le programme arts et science comprend plusieurs activités d'arts culinaires, d'arts visuels, d'arts plastiques, de chimie, de biologie et de physique. Il ne possède pas d’activité physique, cependant une activité matinale est réservée pour pratiquer le yoga ou jouer à un jeu de course comme le ballon chasseur."
// ));




    // // Session

    // this.sessionActuelle = new Session(
    //   "S21",
    //   "Session 2021",
    //   "Session plein de plaisir",
    //   "2021-04-01",
    //   "2021-08-01"
    // );

    // this.sessions.push(this.sessionActuelle);
    // this.sessions.push(new Session(
    //   "S20",
    //   "Session 2020",
    //   "Session plein de plaisir",
    //   "2020-04-01",
    //   "2020-08-01"
    // ));

    // this.sessions.push(new Session(
    //   "S22",
    //   "Session 2022",
    //   "Session plein de plaisir",
    //   "2022-04-01",
    //   "2022-08-01"
    // ));

    // for(let sess of this.sessions) {
    //   for(let i = 1; i <= 15; i++) {
    //     let semaineTmp: Semaine = new Semaine(
    //       "S" + i + "_" + sess.id,
    //       i
    //     );
  
    //     for(let j = 0; j < 3; j++) {
    //       semaineTmp.ajouterProgramme( new Programme (
    //         "P" + j + "_" + semaineTmp.id,
    //         "G" + j,
    //         "Nos " + j + " amis.",
    //         10 + (i * j)
    //       ));
    //     }
  
    //     sess.semaines.push(semaineTmp);
    //   }
    // }





//     inscriptionParent

//     this.inscriptionParents.push(new InscriptionParent("homer"));
//     this.inscriptionParents[0].inscriptionEnfant.push(new InscriptionEnfant("S20"));
//       this.inscriptionParents[0].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("1","P0_S7_S20", "S7_S20"));
//       this.inscriptionParents[0].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("1","P1_S8_S20", "S8_S20"));
//       this.inscriptionParents[0].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("1","P0_S9_S20", "S9_S20"));
//       this.inscriptionParents[0].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("1","P2_S10_S20", "S10_S20"));
//       this.inscriptionParents[0].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("1","P1_S11_S20", "S11_S20"));

//       this.inscriptionParents[0].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("2","P0_S4_S20", "S4_S20"));
//       this.inscriptionParents[0].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("2","P1_S5_S20", "S5_S20"));
//       this.inscriptionParents[0].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("2","P0_S6_S20", "S6_S20"));
//       this.inscriptionParents[0].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("2","P0_S10_S20", "S10_S20"));
//       this.inscriptionParents[0].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("2","P2_S11_S20", "S11_S20"));

//     this.inscriptionParents[0].inscriptionEnfant.push(new InscriptionEnfant("S21"));
//       this.inscriptionParents[0].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("2","P0_S1_S20", "S1_S21"));
//       this.inscriptionParents[0].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("2","P1_S5_S20", "S5_S21"));
//       this.inscriptionParents[0].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("2","P0_S6_S20", "S6_S21"));
//       this.inscriptionParents[0].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("1","P0_S6_S20", "S6_S21"));
//       this.inscriptionParents[0].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("2","P0_S10_S20", "S10_S21"));
//       this.inscriptionParents[0].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("2","P2_S14_S20", "S14_S21"));

//   this.inscriptionParents.push(new InscriptionParent("ned"));
//   this.inscriptionParents[1].inscriptionEnfant.push(new InscriptionEnfant("S20"));
//     this.inscriptionParents[1].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("11","P0_S7_S20", "S7_S20"));
//     this.inscriptionParents[1].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("11","P1_S8_S20", "S8_S20"));
//     this.inscriptionParents[1].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("11","P0_S9_S20", "S9_S20"));
//     this.inscriptionParents[1].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("11","P1_S11_S20", "S11_S20"));

//     this.inscriptionParents[1].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("12","P0_S4_S20", "S4_S20"));
//     this.inscriptionParents[1].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("12","P0_S10_S20", "S10_S20"));
//     this.inscriptionParents[1].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("12","P2_S11_S20", "S11_S20"));

//   this.inscriptionParents[1].inscriptionEnfant.push(new InscriptionEnfant("S21"));
//     this.inscriptionParents[1].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("12","P0_S1_S20", "S1_S21"));
//     this.inscriptionParents[1].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("12","P0_S6_S20", "S6_S21"));
//     this.inscriptionParents[1].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("11","P0_S6_S20", "S6_S21"));
//     this.inscriptionParents[1].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("12","P0_S10_S20", "S10_S21"));
//     this.inscriptionParents[1].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("12","P2_S14_S20", "S14_S21"));


