import { Component, OnInit } from '@angular/core';
import { Parent } from '../../classes/fiche-parent/parent';
import { AuthService } from "../../services/auth.service";
import { FicheParent } from 'src/app/classes/fiche-parent/fiche-parent';
import { IGabaritProgramme, IProgramme } from 'src/app/classes/module-json/module-programme';
import { ISession } from 'src/app/classes/module-json/module-programme';
import { InscriptionParent } from 'src/app/classes/fiche-parent/inscription-parent';
import { InscriptionEnfant } from 'src/app/classes/fiche-parent/inscription-enfant';
import { InscriptionSemaine } from 'src/app/classes/fiche-parent/inscription-semaine';
import { IInscriptionEnfant, IInscriptionParent, IInscriptionSemaine } from 'src/app/classes/module-json/module-fiche-parent';
import { Programme } from 'src/app/classes/programme/programme';
import { Semaine } from 'src/app/classes/programme/semaine';
import { MProgramme } from 'src/app/classes/methode-programme';


@Component({
  selector: 'app-section-parent-inscription',
  templateUrl: './section-parent-inscription.component.html',
  styleUrls: ['./section-parent-inscription.component.scss']
})
export class SectionParentInscriptionComponent implements OnInit {

  dateMaintenant: Date = new Date();

  parent!:Parent;
  ficheParent!: FicheParent;
  inscriptionParent!: InscriptionParent;

  gabaritProgrammes!: IGabaritProgramme[];
  sessions!: ISession[];
  idSessionActuelle!: string;
  

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    this.ficheParent = this.authService.ficheParent;
    this.parent = this.ficheParent.parent;

    this.gabaritProgrammes = this.authService.gabaritProgrammes;
    this.sessions = this.authService.sessions;
    this.idSessionActuelle = this.sessions[0].id;
    this.inscriptionParent = this.authService.inscriptionParent;
  }

  estEnCours(date: Date): string {
    if ( date > this.dateMaintenant ) return "week-ongoing";
    else return "week-passed";
  }

  // exportJson() {
  //   const data = JSON.stringify(this.inscriptionParents);
  //   console.log(data);
  // }

  getSessionActuelle(): ISession {
    return MProgramme.getSessionById(this.sessions, this.idSessionActuelle);
  }

  getGabaritProgrammeById(idGabaritProgramme: string): IGabaritProgramme {
    return MProgramme.getGabaritProgrammeById(this.gabaritProgrammes, idGabaritProgramme);
  }

  getInscriptionSession(): IInscriptionEnfant {
    return MProgramme.getInscriptionSession(this.inscriptionParent, this.idSessionActuelle);
  }

  getInscriptionSemaine(idSemaine: string, idEnfant: string): IInscriptionSemaine {
    return MProgramme.getInscriptionSemaine(this.inscriptionParent, this.idSessionActuelle, idSemaine, idEnfant);
  }

  getProgrammeById(idSemaine: string, idProgramme: string): IProgramme {
    return MProgramme.getProgrammeById(this.getSessionActuelle(), idSemaine, idProgramme);
  }

  getGabaritProgramme(idSemaine: string, idEnfant: string): IGabaritProgramme {
    return MProgramme.getGabaritProgramme(
      this.getSessionActuelle(), 
      this.gabaritProgrammes, 
      this.inscriptionParent, 
      idSemaine, 
      idEnfant
    );
  }






}
