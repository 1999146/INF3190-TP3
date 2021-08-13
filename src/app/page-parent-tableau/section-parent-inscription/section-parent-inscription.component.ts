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

  getSessionById(sessionId: string): ISession {
    for (let session of this.sessions) if (sessionId == session.id) return session;
    return this.sessions[0];
  }

  getSessionActuelle(): ISession {
    return this.getSessionById(this.idSessionActuelle);
  }

  getGabaritProgrammeById(idGabaritProgramme: string): IGabaritProgramme {
    for (let gabarit of this.gabaritProgrammes) if (idGabaritProgramme == gabarit.id) return gabarit;
    return this.gabaritProgrammes[0]; // renplacer par undefined
  }



  getInscriptionSession(): IInscriptionEnfant {
    for(let inscription of this.inscriptionParent.inscriptionEnfant) {
      if(inscription.idSession == this.idSessionActuelle) return inscription;
    }
    return new InscriptionEnfant(this.idSessionActuelle); // remplacer par undefined
  }

  getInscriptionSemaine(idSemaine: string, idEnfant: string): IInscriptionSemaine {
    for(let inscription of this.getInscriptionSession().inscriptionsSemaines) {
      if (inscription.idEnfant == idEnfant && inscription.idSemaine == idSemaine) return inscription;
    }
    return new InscriptionSemaine(idEnfant, this.idSessionActuelle, idSemaine);
  }

  getProgrammeById(idSemaine: string, idProgramme: string): IProgramme {
    for (let semaine of this.getSessionActuelle().semaines) {
      if (semaine.id == idSemaine) {
        for (let programme of semaine.programmes) {
          if (idProgramme == programme.id) return programme;
        }
      }
    }
    return this.getSessionActuelle().semaines[0].programmes[0];
  }

  getGabaritProgramme(idSemaine: string, idEnfant: string): IGabaritProgramme {
    return this.getGabaritProgrammeById(this.getProgrammeById(idSemaine, this.getInscriptionSemaine(idSemaine, idEnfant).idProgramme).idGabaritProgramme);
  }






}
