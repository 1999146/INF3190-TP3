import { IGabaritProgramme } from "../module-json/module-programme";

export class GabaritProgramme implements IGabaritProgramme {
  public id: string;
  public titre: string;
  public description: string;

  constructor(
      id: string,
      titre: string,
      description: string
  ) {
    this.id = id;
    this.titre = titre;
    this.description = description;
  }
  
}
