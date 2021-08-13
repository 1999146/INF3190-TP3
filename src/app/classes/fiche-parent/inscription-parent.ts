import { InscriptionEnfant } from "./inscription-enfant";

export class InscriptionParent {
  idParent: string;
  inscriptionEnfant: InscriptionEnfant[] = new Array<InscriptionEnfant>();

  constructor(
      idParent: string
  ) {
    this.idParent = idParent;
  }

}