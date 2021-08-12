import { Component, OnInit } from '@angular/core';
import { Session } from '../../classes/session';
import { Enfant } from '../../classes/enfant';
import { Parent } from '../../classes/parent';
import { GabaritProgramme } from '../../classes/gabarit-programme';
import { Semaine } from '../../classes/semaine';
import { Programme } from '../../classes/programme';

@Component({
  selector: 'app-section-parent-inscription',
  templateUrl: './section-parent-inscription.component.html',
  styleUrls: ['./section-parent-inscription.component.scss']
})
export class SectionParentInscriptionComponent implements OnInit {

  dateMaintenant: Date = new Date();
  parent: Parent;
  gabaritProgrammes: Array<GabaritProgramme> = new Array<GabaritProgramme>();
  sessionActuelle: Session;
  sessions: Array<Session> = new Array<Session>();

  // array contenant des semaines
    // contenant un array de programmes

  constructor() {

    // Parent enfant

    this.parent = new Parent(
      "0",
      "Simpson",
      "Homer",
      "simpson.homer@gmail.com",
      "123 rue Springfield",
      "1960-04-08",
      "../../assets/img/profil.png",
    );

    this.parent.enfants.push(new Enfant(
      "1",
      "Simpson",
      "Lisa",
      "1990-06-09",
      "../../assets/img/profil.png",
      "")
    );

    this.parent.enfants.push(new Enfant(
      "2",
      "Simpson",
      "Bart",
      "1994-08-21",
      "../../assets/img/bart_mini.jpg",
      "")
    );

    // Gabarit Programme

    this.gabaritProgrammes.push(new GabaritProgramme(
      "G0",
      "Le classique",
      "Un peu de tout"
    ));

    this.gabaritProgrammes.push(new GabaritProgramme(
      "G1",
      "L'enfant actif",
      "Que du sport"
    ));

    this.gabaritProgrammes.push(new GabaritProgramme(
      "G0",
      "Arts et sciences",
      "Un remue-meninge"
    ));

    // Session

    this.sessionActuelle = new Session(
      "S21",
      "Session 2021",
      "Session plein de plaisir",
      new Date("2021-04-01"),
      new Date("2021-08-01")
    );

    this.sessions.push(this.sessionActuelle);
    this.sessions.push(new Session(
      "S20",
      "Session 2020",
      "Session plein de plaisir",
      new Date("2020-04-01"),
      new Date("2020-08-01")
    ));

    for(let i = 1; i <= 15; i++) {
      let semaineTmp: Semaine = new Semaine(
        "S" + i,
        this.sessionActuelle,
        i
      );

      for(let j = 1; j <= 3; j++) {
        semaineTmp.ajouterProgramme( new Programme (
          "P" + i + "-" + j,
          this.gabaritProgrammes[j-1],
          "Nos " + j + " amis.",
          10 + (i * j)
        ));
      }

      this.sessionActuelle.ajouterSemaine(semaineTmp);
    }

  }

  ngOnInit(): void {
  }

  estEnCours(date: Date): string {
    if ( date > this.dateMaintenant ) return "week-ongoing";
    else return "week-passed";
  }

}
