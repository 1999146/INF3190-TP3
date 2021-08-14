import { InscriptionEnfant } from "./inscription-enfant";

export class InscriptionParent {
  idParent: string;
  // idSession: string; // todo retirer un niveau
  inscriptionEnfant: InscriptionEnfant[] = new Array<InscriptionEnfant>(); //session

  constructor(
      idParent: string
  ) {
    this.idParent = idParent;
  }

}