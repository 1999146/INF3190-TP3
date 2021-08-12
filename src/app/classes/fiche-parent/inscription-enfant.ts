import { Enfant } from "./enfant";
import { InscriptionSemaine } from "./inscription-semaine";

export class InscriptionEnfant {
  idEnfant: string;
  inscriptionsSemaines: Array<InscriptionSemaine> = new Array<InscriptionSemaine>();

  constructor(
      idEnfant: string,
      inscriptionsSemaines: Array<InscriptionSemaine>
  ) {
    this.idEnfant = idEnfant;
    this.inscriptionsSemaines = inscriptionsSemaines;
  }

}
