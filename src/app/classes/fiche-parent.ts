import { Parent } from "./parent";
import { ModuleFicheParent } from "./module-json/module-fiche-parent";

export class FicheParent implements ModuleFicheParent.IFicheParent {
  username: string;
  password: string;
  parent: Parent;

  constructor (
      username: string,
      password: string,
      parent: Parent
  ) {
    this.username = username;
    this.password = password;
    this.parent = parent;
  }

}