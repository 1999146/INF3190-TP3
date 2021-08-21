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
    console.log(JSON.stringify(this.typeActivites));
    let typeActivite = f.value as ITypeActivite;
    if (this.valeurRemplies(typeActivite)) this.typeActivites.push(typeActivite);
    else console.log("nope");
  }

  valeurRemplies(typeActivite: any): boolean {
    return ( typeActivite.nom != "" && typeActivite.description != "" );
  }


  // let velo = f.value as IVelo;
  // if (VeloStatic.valeursRemplies(velo)) {
  //   this.veloService.ajouter(velo).then( velo => {
  //     if (velo != undefined) VeloStatic.ajouterVelo(this.velos, velo);
  //     else console.log("velo existant");
  //     this.actualiserFiltre();
  //   });
  // }
}
