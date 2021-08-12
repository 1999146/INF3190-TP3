export declare module FicheParent {

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

}





