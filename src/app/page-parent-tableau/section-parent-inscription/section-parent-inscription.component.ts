import { Component, OnInit } from '@angular/core';
import { Parent } from '../../classes/fiche-parent/parent';
import {AuthService} from "../../services/auth.service";
import { FicheParent } from 'src/app/classes/fiche-parent/fiche-parent';
import { IGabaritProgramme } from 'src/app/classes/module-json/module-programme';
import { ISessionCamp } from 'src/app/classes/module-json/module-programme';
// import { ISession } from 'src/app/classes/module-json/ISession';
// import { Session } from '../../classes/programme/session';

// import { Semaine } from 'src/app/classes/programme/semaine';
// import { Programme } from 'src/app/classes/programme/programme';

import sessionsJson from "../../../data/sessions";


@Component({
  selector: 'app-section-parent-inscription',
  templateUrl: './section-parent-inscription.component.html',
  styleUrls: ['./section-parent-inscription.component.scss']
})
export class SectionParentInscriptionComponent implements OnInit {

  dateMaintenant: Date = new Date();

  parent!:Parent;
  ficheParent!: FicheParent;

  gabaritProgrammes!: IGabaritProgramme[];
  sessionsCamp: ISessionCamp[] = sessionsJson;
  sessionActuelle: ISessionCamp = this.sessionsCamp[0]

  constructor(public authService: AuthService) {

    
    // this.ficheParent = authService.ficheParent;
    // this.parent = this.ficheParent.parent;
    // this.gabaritProgrammes = authService.gabaritProgrammes;
    // this.sessions = authService.sessions;
    // this.sessionActuelle = this.sessions[0];
  }

  ngOnInit(): void {
    this.ficheParent = this.authService.ficheParent;
    this.parent = this.ficheParent.parent;
    this.gabaritProgrammes = this.authService.gabaritProgrammes;
    // this.sessionsCamp = this.authService.sessionsCamp;
    // this.sessionActuelle = this.sessionsCamp[0];
    console.log("session get");
    // this.sessionsCamp.forEach(s => console.log(s));
    console.log(this.sessionsCamp);
  }

  estEnCours(date: Date): string {
    if ( date > this.dateMaintenant ) return "week-ongoing";
    else return "week-passed";
  }

  exportJson() {
    const data = JSON.stringify(this.sessionsCamp);
    console.log(data);
  }

  test() {
    for (let i = 0; i < 3; i++) {
      console.log(this.sessionsCamp[i].nom);
    }

  }


}
