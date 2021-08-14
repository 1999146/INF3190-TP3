import { Enfant } from "./enfant";
import { InscriptionSemaine } from "./inscription-semaine";

export class InscriptionEnfant {
  // idEnfant: string;
  idSession: string;
  inscriptionsSemaines: Array<InscriptionSemaine> = new Array<InscriptionSemaine>();

  constructor(
      // idEnfant: string,
      idSession: string
  ) {
    // this.idEnfant = idEnfant;
    this.idSession = idSession;
  }

}
