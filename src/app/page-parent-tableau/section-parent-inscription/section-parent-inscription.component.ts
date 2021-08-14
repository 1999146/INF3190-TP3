import { Component, OnInit } from '@angular/core';
import { Parent } from '../../classes/parent';
import { AuthService } from "../../services/auth.service";
import { IGabaritProgramme, IProgramme } from 'src/app/classes/interface-json/interface-session';
import { ISession } from 'src/app/classes/interface-json/interface-session';
import { InscriptionParent } from '../../classes/parent';
import { IInscriptionEnfant, IInscriptionParent } from 'src/app/classes/interface-json/interface-parent';
import { Join } from 'src/app/classes/methode-join';
import { Router } from '@angular/router';


@Component({
  selector: 'app-section-parent-inscription',
  templateUrl: './section-parent-inscription.component.html',
  styleUrls: ['./section-parent-inscription.component.scss']
})
export class SectionParentInscriptionComponent implements OnInit {

  dateMaintenant: Date = new Date();

  parent!:Parent;
  // ficheParent!: FicheParent;
  inscriptionParent!: InscriptionParent[];

  gabaritProgrammes!: IGabaritProgramme[];
  sessions!: ISession[];
  idSessionActuelle!: string;
  

  constructor(public authService: AuthService, private router: Router) {
    // if (!authService.isAuth) this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.parent = this.authService.parent;
    this.gabaritProgrammes = this.authService.gabaritProgrammes;
    this.sessions = this.authService.sessions;
    this.idSessionActuelle = this.sessions[0].id;
    this.inscriptionParent = this.authService.inscriptionsParents;
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
    return Join.getSessionById(this.sessions, this.idSessionActuelle);
  }

  getNomGabaritProgrammeById(idGabaritProgramme: string): string {
    let gabaritProgramme: IGabaritProgramme | undefined = Join.getGabaritProgrammeById(this.gabaritProgrammes, idGabaritProgramme);
    if (gabaritProgramme != undefined) return gabaritProgramme.titre;
    return "undefined";
  }

  getInscriptionsEnfants(): IInscriptionEnfant[] | undefined {
    return Join.getInscriptionsEnfants(this.inscriptionParent, this.idSessionActuelle);
  }

  // getInscriptionSemaine(idSemaine: string, idEnfant: string): IInscriptionSemaine | undefined {
  //   return MProgramme.getInscriptionSemaine(this.inscriptionParent, this.idSessionActuelle, idSemaine, idEnfant);
  // }

  getProgrammeById(idSemaine: string, idProgramme: string): IProgramme {
    return Join.getProgrammeById(this.getSessionActuelle(), idSemaine, idProgramme);
  }

  getNomGabaritProgrammePaye(idSemaine: string, idEnfant: string): string {
    let gabaritProgramme: IGabaritProgramme | undefined = Join.getGabaritProgramme(
      this.getSessionActuelle(), 
      this.gabaritProgrammes, 
      this.inscriptionParent, 
      idSemaine, 
      idEnfant
    );
    if (gabaritProgramme != undefined) return gabaritProgramme.titre;
    return "undefined";
  }

  estPaye(idSemaine: string, idEnfant: string): boolean {
    let inscriptionEnfant: IInscriptionEnfant | undefined = Join.getInscriptionEnfant(this.inscriptionParent, this.idSessionActuelle, idSemaine, idEnfant);
    if (inscriptionEnfant == undefined) return false;
    else return inscriptionEnfant.estPaye;
  }






}
