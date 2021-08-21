import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IActivite, ITypeActivite } from 'src/app/classes/interface-json/interface-session';

@Component({
  selector: 'app-modal-creer-activite',
  templateUrl: './modal-creer-activite.component.html',
  styleUrls: ['./modal-creer-activite.component.scss']
})
export class ModalCreerActiviteComponent implements OnInit {

  @Input() typeActivites!: ITypeActivite[];
  @Input() activites!: IActivite[];

  constructor() { }

  ngOnInit(): void {
  }

  ajouterActivite(f: NgForm) {
    let activite = f.value as IActivite;
    if (this.valeurRemplies(activite)) this.activites.unshift(activite);
  }

  valeurRemplies(activite: any): boolean {
    return ( activite.nom != "" && activite.idTypeActivite != "" );
  }

}
