import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITypeActivite } from 'src/app/classes/interface-json/interface-session';

@Component({
  selector: 'app-modal-creer-type',
  templateUrl: './modal-creer-type.component.html',
  styleUrls: ['./modal-creer-type.component.scss']
})
export class ModalCreerTypeComponent implements OnInit {

  @Input() typeActivites!: ITypeActivite[];

  constructor() { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.typeActivites));
  }

  ajouterType(f: NgForm): void {
    // console.log(JSON.stringify(this.typeActivites));
    let typeActivite = f.value as ITypeActivite;
    if (this.valeurRemplies(typeActivite)) this.typeActivites.unshift(typeActivite);
    // else document.getElementById("modalType")?.click();
  }

  valeurRemplies(typeActivite: any): boolean {
    return ( typeActivite.nom != "" && typeActivite.description != "" );
  }

}
