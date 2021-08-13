import { Component, OnInit } from '@angular/core';
import { Parent } from '../../classes/fiche-parent/parent';
import { AuthService } from "../../services/auth.service";
import { FicheParent } from 'src/app/classes/fiche-parent/fiche-parent';
import { IGabaritProgramme } from 'src/app/classes/module-json/module-programme';
import { ISession } from 'src/app/classes/module-json/module-programme';
import { InscriptionParent } from 'src/app/classes/fiche-parent/inscription-parent';
import { InscriptionEnfant } from 'src/app/classes/fiche-parent/inscription-enfant';
import { InscriptionSemaine } from 'src/app/classes/fiche-parent/inscription-semaine';


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

  // export json

  inscriptionParents: InscriptionParent[] = new Array<InscriptionParent>();


  // inscriptionParentB: InscriptionParent;

  

  constructor(public authService: AuthService) {
    this.inscriptionParents.push(new InscriptionParent("homer"));
      this.inscriptionParents[0].inscriptionEnfant.push(new InscriptionEnfant("S20"));
        this.inscriptionParents[0].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("1","P0_S7_S20", "S7_S20"));
        this.inscriptionParents[0].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("1","P1_S8_S20", "S8_S20"));
        this.inscriptionParents[0].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("1","P0_S9_S20", "S9_S20"));
        this.inscriptionParents[0].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("1","P2_S10_S20", "S10_S20"));
        this.inscriptionParents[0].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("1","P1_S11_S20", "S11_S20"));

        this.inscriptionParents[0].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("2","P0_S4_S20", "S4_S20"));
        this.inscriptionParents[0].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("2","P1_S5_S20", "S5_S20"));
        this.inscriptionParents[0].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("2","P0_S6_S20", "S6_S20"));
        this.inscriptionParents[0].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("2","P0_S10_S20", "S10_S20"));
        this.inscriptionParents[0].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("2","P2_S11_S20", "S11_S20"));

      this.inscriptionParents[0].inscriptionEnfant.push(new InscriptionEnfant("S21"));
        this.inscriptionParents[0].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("2","P0_S1_S20", "S1_S21"));
        this.inscriptionParents[0].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("2","P1_S5_S20", "S5_S21"));
        this.inscriptionParents[0].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("2","P0_S6_S20", "S6_S21"));
        this.inscriptionParents[0].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("1","P0_S6_S20", "S6_S21"));
        this.inscriptionParents[0].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("2","P0_S10_S20", "S10_S21"));
        this.inscriptionParents[0].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("2","P2_S14_S20", "S14_S21"));

    this.inscriptionParents.push(new InscriptionParent("ned"));
    this.inscriptionParents[1].inscriptionEnfant.push(new InscriptionEnfant("S20"));
      this.inscriptionParents[1].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("11","P0_S7_S20", "S7_S20"));
      this.inscriptionParents[1].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("11","P1_S8_S20", "S8_S20"));
      this.inscriptionParents[1].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("11","P0_S9_S20", "S9_S20"));
      this.inscriptionParents[1].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("11","P1_S11_S20", "S11_S20"));

      this.inscriptionParents[1].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("12","P0_S4_S20", "S4_S20"));
      this.inscriptionParents[1].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("12","P0_S10_S20", "S10_S20"));
      this.inscriptionParents[1].inscriptionEnfant[0].inscriptionsSemaines.push(new InscriptionSemaine("12","P2_S11_S20", "S11_S20"));

    this.inscriptionParents[1].inscriptionEnfant.push(new InscriptionEnfant("S21"));
      this.inscriptionParents[1].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("12","P0_S1_S20", "S1_S21"));
      this.inscriptionParents[1].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("12","P0_S6_S20", "S6_S21"));
      this.inscriptionParents[1].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("11","P0_S6_S20", "S6_S21"));
      this.inscriptionParents[1].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("12","P0_S10_S20", "S10_S21"));
      this.inscriptionParents[1].inscriptionEnfant[1].inscriptionsSemaines.push(new InscriptionSemaine("12","P2_S14_S20", "S14_S21"));
    
  }

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

  exportJson() {
    const data = JSON.stringify(this.inscriptionParents);
    console.log(data);
  }

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
