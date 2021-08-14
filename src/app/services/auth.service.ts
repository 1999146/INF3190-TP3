// import * as dossiersParents from '../../data/dossier_parent.json';
// let parents = dossiersParents;

import fichesParentsJson from "../../data/fiches-parents";
import gabaritProgrammeJson from "../../data/gabarit-programmes";
import sessionsJson from "../../data/sessions";
import inscriptionParentJson from "../../data/inscription-parent";

import { IParent, IInscriptionParent } from "../classes/module-json/module-fiche-parent";
import { IGabaritProgramme, ISession } from "../classes/module-json/module-programme";

let parents: IParent[] = fichesParentsJson;
let inscriptionParents: IInscriptionParent[] = inscriptionParentJson;

export class AuthService {
  isAuth: boolean = false;
  isAdmin: boolean = false;
  indiceParent: number = 0;

  parent: IParent = parents[0];
  inscriptionParent: IInscriptionParent = inscriptionParents[0];
  gabaritProgrammes: IGabaritProgramme[] = gabaritProgrammeJson;
  sessions: ISession[] = sessionsJson;

  signIn(username: string, password: string) {
    if (username == "admin" && password == "admin") {
      this.isAuth = true;
      this.isAdmin = true;
    } else {
      if(!this.verifyPassword(username, password)){
        //Connexion refusé, rediriger avec message d'erreur
        console.log("connexion reffuse");
      }else{
        this.logParent(username);
        this.isAuth = true;
      }
    }
  }

  signOut() {
    this.isAuth = false;
    this.isAdmin = false;
  }

  verifyPassword(username: string, password: string): boolean{
    let authentifie = false;
    for(let i = 0; i < parents.length; i++){
      if(parents[i].username == username && parents[i].password == password){
        authentifie = true;
      }
    }
    return authentifie;
  }

  logParent(username: string){
    for(let i = 0; i < parents.length; i++) {
      if(parents[i].username == username){
          this.indiceParent = i;
          this.parent = parents[i];
      }
    }
    for(let inscription of inscriptionParents) {
      if(this.parent.id = inscription.idParent) {
        this.inscriptionParent = inscription;
      }
    }
  }

}
