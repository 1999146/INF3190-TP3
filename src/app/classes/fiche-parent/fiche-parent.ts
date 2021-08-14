import { Parent } from "./parent";
import { IFicheParent } from "../module-json/module-fiche-parent";

export class FicheParent implements IFicheParent {
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