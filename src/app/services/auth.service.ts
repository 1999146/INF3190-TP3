// import * as dossiersParents from '../../data/dossier_parent.json';
// let parents = dossiersParents;

import * as fichesParentsJson from "../../data/fiches-parents.json";
import * as gabaritProgrammeJson from "../../data/gabarit-programmes.json";

import { ModuleFicheParent } from "../classes/module-json/module-fiche-parent";
import { ModuleProgramme } from "../classes/module-json/module-programme";

let parents: ModuleFicheParent.IFicheParent[] = fichesParentsJson;

export class AuthService {
  isAuth: boolean = false;
  isAdmin: boolean = false;
  indiceParent: number = 0;

  ficheParent: ModuleFicheParent.IFicheParent = parents[this.indiceParent];
  gabaritProgrammes: ModuleProgramme.IGabaritProgramme[] = gabaritProgrammeJson;

  signIn(username: String, password: String) {
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

  verifyPassword(username: String, password: String): boolean{
    let authentifie = false;
    for(let i = 0; i < parents.length; i++){
      if(parents[i].username == username && parents[i].password == password){
        authentifie = true;
      }
    }
    return authentifie;
  }

  logParent(username: String){
    for(let i = 0; i < 3; i++){
      if(parents[i].username == username){
          this.indiceParent = i;
      }
    }
  }

}
