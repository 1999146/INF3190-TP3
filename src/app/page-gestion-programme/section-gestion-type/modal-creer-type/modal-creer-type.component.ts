import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITypeActivite } from 'src/app/classes/interface-json/interface-session';
import { TypeActivite } from 'src/app/classes/session';
import {MessageService} from "../../../services/message.service";

@Component({
  selector: 'app-modal-creer-type',
  templateUrl: './modal-creer-type.component.html',
  styleUrls: ['./modal-creer-type.component.scss']
})
export class ModalCreerTypeComponent implements OnInit {

  @Input() typeActivites!: ITypeActivite[];

  constructor(private MessageService:MessageService) { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.typeActivites));
  }

  ajouterType(f: NgForm): void {
    let typeActivite = f.value as ITypeActivite;
    if (this.valeurRemplies(typeActivite)) {
      let newType = new TypeActivite (
        typeActivite.nom,
        typeActivite.description
      );
      this.typeActivites.unshift(newType);
      this.MessageService.setMsgGlobal("Type d'activité ajouté avec succès!");
    }else{
      this.MessageService.setMsgErr("Formulaire invalide!");
    }

  }

  valeurRemplies(typeActivite: any): boolean {
    return ( typeActivite.nom != "" && typeActivite.description != "" );
  }

}
