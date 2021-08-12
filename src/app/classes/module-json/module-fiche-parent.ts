export declare module ModuleFicheParent {

  export interface IParent {
    id: string;
    nom: string;
    prenom: string;
    courriel: string;
    adresse: string;
    dateNaissance: string;
    urlPhoto: string;
    enfants: IEnfant[];
  }

  export interface IEnfant {
    id: string;
    nom: string;
    prenom: string;
    dateNaissance: string;
    urlPhoto: string;
    note: string;
  }

  export interface IFicheParent {
    username: string;
    password: string;
    parent: IParent;
  }

}





