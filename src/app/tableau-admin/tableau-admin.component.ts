import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { Join } from "../classes/methode-join";
import { IEnfant, IParent } from "../classes/interface-json/interface-parent";
import { Enfant, Inscription } from "../classes/parent";
import { IGabaritProgramme, IProgramme, ISession } from "../classes/interface-json/interface-session";
import { sortTable } from "../util/sortTable";
import {LoggerService} from "../services/logger.service";

@Component({
  selector: 'app-tableau-admin',
  templateUrl: './tableau-admin.component.html',
  styleUrls: ['./tableau-admin.component.scss']
})
export class TableauAdminComponent implements OnInit {

  inscriptions!: Inscription[];
  parents!: IParent[];
  enfants!: Enfant[];
  sessions!: ISession[];
  gabaritProgrammes!: IGabaritProgramme[];
  programmes!: IProgramme[];

  inscriptionSelectionnee: Inscription | undefined = undefined;
  parentSelectionnee!: IParent;
  enfantSelectionnee!: IEnfant | undefined;
  sortedBy!: string;
  sortAscendent = false;

  constructor(public authService: AuthService, private router: Router, private logger: LoggerService) {
    if (!authService.isAuth) {
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {
    this.inscriptions = Join.getInscriptions(this.authService.inscriptionsParents);
    this.sessions = this.authService.sessions;
    this.gabaritProgrammes = this.authService.gabaritProgrammes;
    this.parents = this.authService.parents;
    this.programmes = this.authService.programmes;
  }



  getNomParent(idParent: string): string {
    let parent = this.getParentById(idParent);
    return parent?.nom + ", " + parent?.prenom;
  }

  getNomEnfant(idParent:string, idEnfant: string): string {
    let parent = this.getParentById(idParent);
    if(parent != undefined){
      for (let enfant of parent.enfants) {
        if (enfant.id == idEnfant){
          return enfant.nom + ", " + enfant.prenom;
        }
      }
    }
    return "";
  }

  getNomSession(idSession: string): string {
    let session = Join.getSessionById(this.sessions, idSession);
    return (session != undefined)? session.nom : "";
  }

  getSemaine(idSemaine: string): string{
    let semaine = Join.findSemaineById(this.sessions, idSemaine);
    return (semaine != undefined)? ("Semaine " + semaine.noSemaine) : "";
  }

  getNomProgramme(idProgramme: string): string {
    let gabaritProgramme = Join.getGabaritProgrammeByIdProgramme(this.programmes, this.gabaritProgrammes, idProgramme);
    return (gabaritProgramme != undefined)? gabaritProgramme.titre : "undefined";
  }

  getNomProgrammeModal(): string {
    return (this.inscriptionSelectionnee != undefined)?
    this.getNomProgramme(this.inscriptionSelectionnee.idProgramme) : "undefined";
  }

  getParentById(idParent: string){
    for (let parent of this.parents){
      if(parent.id === idParent){
        return parent;
      }
    }
    return this.parents[0];
  }


  showModal(inscription: Inscription) {
      this.inscriptionSelectionnee = inscription;
      this.parents.forEach((parent) =>{
        if(parent.id == this.inscriptionSelectionnee?.idParent){
          this.parentSelectionnee = parent;
          this.enfantSelectionnee = Join.getEnfantById(this.parentSelectionnee, inscription.idEnfant);
        }
      });
    }

  orderBy(header:string){
    if(this.sortedBy === header){
      this.sortAscendent = !this.sortAscendent;
    }else{
      this.sortAscendent = true;
    }
    sortTable(this.inscriptions, header, this.sortAscendent);
    this.sortedBy = header;
  }

}
