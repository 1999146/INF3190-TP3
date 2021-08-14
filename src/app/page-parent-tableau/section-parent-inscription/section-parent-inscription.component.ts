import { Component, OnInit } from '@angular/core';
import { InscriptionEnfant, Parent } from '../../classes/parent';
import { AuthService } from "../../services/auth.service";
import { IGabaritProgramme, IProgramme, ISemaine } from 'src/app/classes/interface-json/interface-session';
import { ISession } from 'src/app/classes/interface-json/interface-session';
import { InscriptionParent } from '../../classes/parent';
import { IEnfant, IInscriptionEnfant, IInscriptionParent } from 'src/app/classes/interface-json/interface-parent';
import { Join } from 'src/app/classes/methode-join';
import { Router } from '@angular/router';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-section-parent-inscription',
  templateUrl: './section-parent-inscription.component.html',
  styleUrls: ['./section-parent-inscription.component.scss']
})
export class SectionParentInscriptionComponent implements OnInit {

  dateMaintenant: Date = new Date();

  parent!:Parent;
  inscriptionsParents!: IInscriptionParent[];

  gabaritProgrammes!: IGabaritProgramme[];
  sessions!: ISession[];
  idSessionActuelle!: string;
  selectAjoutPanier!: IProgramme;
  

  constructor(public authService: AuthService, private router: Router) {
    // if (!authService.isAuth) this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.parent = this.authService.parent;
    this.gabaritProgrammes = this.authService.gabaritProgrammes;
    this.sessions = this.authService.sessions;
    this.idSessionActuelle = this.sessions[0].id;
    this.inscriptionsParents = this.authService.inscriptionsParents;
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
    let session: ISession | undefined = Join.getSessionById(this.sessions, this.idSessionActuelle);
    if (session != undefined) return session;
    return this.sessions[0];
  }

  getNomGabaritProgrammeById(idGabaritProgramme: string): string {
    let gabaritProgramme: IGabaritProgramme | undefined = Join.getGabaritProgrammeById(this.gabaritProgrammes, idGabaritProgramme);
    if (gabaritProgramme != undefined) return gabaritProgramme.titre;
    return "undefined";
  }


  getGabaritProgrammeById(idGabaritProgramme: string): IGabaritProgramme | undefined {
    let gabaritProgramme: IGabaritProgramme | undefined = Join.getGabaritProgrammeById(this.gabaritProgrammes, idGabaritProgramme);
    if (gabaritProgramme != undefined) return gabaritProgramme;
    return undefined;
  }

  getInscriptionsEnfants(): IInscriptionEnfant[] | undefined {
    return Join.getInscriptionsEnfants(this.inscriptionsParents, this.idSessionActuelle);
  }

  // getInscriptionSemaine(idSemaine: string, idEnfant: string): IInscriptionSemaine | undefined {
  //   return MProgramme.getInscriptionSemaine(this.inscriptionParent, this.idSessionActuelle, idSemaine, idEnfant);
  // }

  // getProgrammeById(idSemaine: string, idProgramme: string): IProgramme {
  //   let programme: IProgramme | undefined = Join.getProgrammeById(this.getSessionActuelle(), idSemaine, idProgramme);
  //   if (programme != undefined) return programme;
  //   return 
  // }

  getNomGabaritProgrammeInscrit(idSemaine: string, idEnfant: string): string {
    let gabaritProgramme: IGabaritProgramme | undefined = Join.getGabaritProgramme(
      this.getSessionActuelle(), 
      this.gabaritProgrammes, 
      this.inscriptionsParents, 
      idSemaine, 
      idEnfant
    );
    if (gabaritProgramme != undefined) return gabaritProgramme.titre;
    return "undefined";
  }

  getGabaritProgrammeInscrit(idSemaine: string, idEnfant: string): IGabaritProgramme | undefined {
    let gabaritProgramme: IGabaritProgramme | undefined = Join.getGabaritProgramme(
      this.getSessionActuelle(), 
      this.gabaritProgrammes, 
      this.inscriptionsParents, 
      idSemaine, 
      idEnfant
    );
    if (gabaritProgramme != undefined) return gabaritProgramme;
    return undefined;
  }

  estPaye(idSemaine: string, idEnfant: string): boolean {
    return Join.estInscriptionPaye(
      this.inscriptionsParents, 
      this.idSessionActuelle, 
      idSemaine, 
      idEnfant
    );
  }

  estInscrit(idSemaine: string, idEnfant: string): boolean {
    return Join.estInscriptionInscrit(
      this.inscriptionsParents, 
      this.idSessionActuelle, 
      idSemaine, 
      idEnfant
    );
  }

  inscrire(semaine: ISemaine, enfant: IEnfant, event: any) {
    // console.log(this.selectAjoutPanier.idGabaritProgramme);
    let idProgramme: string = event.target.value;
    console.log(enfant.prenom);
    console.log(semaine.noSemaine);
    console.log(idProgramme);
    let inscriptionEnfant: IInscriptionEnfant | undefined = Join.getInscriptionEnfant(this.inscriptionsParents, this.idSessionActuelle, semaine.id, enfant.id);
    if (inscriptionEnfant == undefined && idProgramme != "") {
      inscriptionEnfant = new InscriptionEnfant(enfant.id, idProgramme, semaine.id);
      this.getInscriptionsEnfants()?.push(inscriptionEnfant);
    } else if (inscriptionEnfant != undefined && idProgramme != "") {
      inscriptionEnfant.estInscrit = true;
    } else if (inscriptionEnfant != undefined && idProgramme == "") {
      inscriptionEnfant.estInscrit = false;
    }
  }

  // getIdGabaritProgrammeInscrit(idSemaine: string, idEnfant: string): string | undefined {

  // }






}
