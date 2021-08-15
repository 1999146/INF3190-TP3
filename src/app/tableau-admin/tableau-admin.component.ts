import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import { Join } from "../classes/methode-join";
import fichesParentsJson from "../../data/fiches-parents";
import {IEnfant, IInscriptionParent, IParent} from "../classes/interface-json/interface-parent";
import {Enfant, Inscription, InscriptionParent} from "../classes/parent";
import {IGabaritProgramme, IProgramme, ISession} from "../classes/interface-json/interface-session";
import {applySourceSpanToExpressionIfNeeded} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-tableau-admin',
  templateUrl: './tableau-admin.component.html',
  styleUrls: ['./tableau-admin.component.scss']
})
export class TableauAdminComponent implements OnInit {


  inscriptionsParents!: InscriptionParent[];
  inscriptions!: Inscription[];
  parents: IParent[] = fichesParentsJson;
  enfants!: Enfant[];
  sessions!: ISession[];
  programmes!: IGabaritProgramme[];
  inscriptionSelectionnee!: Inscription;
  parentSelectionnee!: IParent;
  enfantSelectionnee!: IEnfant | undefined;
  constructor(public authService: AuthService, private router: Router) {
    if (!authService.isAuth){
      this.router.navigate(['']);
    }else{
      this.inscriptionsParents = authService.inscriptionsParents;
      console.log(this.inscriptionsParents);
      this.inscriptions = Join.getInscriptions(this.inscriptionsParents);
      console.log(this.inscriptions);
      console.log(this.parents)
      this.sessions = this.authService.sessions;
      this.programmes = this.authService.gabaritProgrammes;

    }

  }

  getNomParent(idParent: string){
    let parent = this.getParentById(idParent);
    return parent?.nom + ", " + parent?.prenom;
  }

  getNomEnfant(idParent:string, idEnfant: string){
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

  getNomSession(idSession: string){
    return Join.getSessionById(this.sessions, idSession)?.nom;
  }

  getSemaine(idSemaine: string){
    return "Semaine " + idSemaine.charAt(1);
  }

  getNomProgramme(idProgramme: string){
    let codeProgramme = idProgramme.slice(0,2);
   console.log(codeProgramme);
    return Join.getGabaritProgrammeById(this.programmes, codeProgramme)?.titre;
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

    ngOnInit(): void {

  }



}
