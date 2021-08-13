import { Component, OnInit } from '@angular/core';
import { Parent } from '../../classes/fiche-parent/parent';
import { AuthService } from "../../services/auth.service";
import { FicheParent } from 'src/app/classes/fiche-parent/fiche-parent';
import { IGabaritProgramme } from 'src/app/classes/module-json/module-programme';
import { ISession } from 'src/app/classes/module-json/module-programme';


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
  sessions!: ISession[];
  idSessionActuelle!: string;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.ficheParent = this.authService.ficheParent;
    this.parent = this.ficheParent.parent;

    this.gabaritProgrammes = this.authService.gabaritProgrammes;
    this.sessions = this.authService.sessions;
    this.idSessionActuelle = this.sessions[0].id;
  }

  estEnCours(date: Date): string {
    if ( date > this.dateMaintenant ) return "week-ongoing";
    else return "week-passed";
  }

  // exportJson() {
  //   const data = JSON.stringify(this.sessions);
  //   console.log(data);
  // }

  getSessionById(sessionId: string): ISession {
    for (let session of this.sessions) if (sessionId == session.id) return session;
    return this.sessions[0];
  }

  getSessionActuelle(): ISession {
    return this.getSessionById(this.idSessionActuelle);
  }

  getGabaritProgrammeById(idGabaritProgramme: string): IGabaritProgramme {
    for (let gabarit of this.gabaritProgrammes) if (idGabaritProgramme == gabarit.id) return gabarit;
    return this.gabaritProgrammes[0];
  }





}
