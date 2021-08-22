// import { Component, Input, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { IBlocActivite, IActivite, ITypeActivite } from 'src/app/classes/interface-json/interface-session';
// import { BlocActivite } from 'src/app/classes/session';
// import { Join } from 'src/app/classes/methode-join';

// @Component({
//   selector: 'app-modal-creer-bloc',
//   templateUrl: './modal-creer-bloc.component.html',
//   styleUrls: ['./modal-creer-bloc.component.scss']
// })
// export class ModalCreerBlocComponent implements OnInit {

//   @Input() activites!: IActivite[];
//   @Input() typeActivites!: ITypeActivite[];
//   @Input() blocActivites!: IBlocActivite[];

//   activitesTrie: IActivite[] = [];

//   newBlocActivite!: IBlocActivite;

//   constructor() { }

//   ngOnInit(): void {
//     this.newBlocActivite = new BlocActivite("", [this.activites[0].id], []);
//   }

//   resetBloc() {
//     this.newBlocActivite = new BlocActivite("", [this.activites[0].id], []);
//     this.filtrerActivite();
//   }

//   ajouterBloc(f: NgForm) {
//     console.log(JSON.stringify(this.newBlocActivite));
//     if (this.estValide()) this.blocActivites.unshift(this.newBlocActivite);

//   }

//   retirerActivite() {
//     this.newBlocActivite.idActivites.pop();
//   }

//   ajouterActivite() {
//     this.newBlocActivite.idActivites.push(this.activitesTrie[0].id);
//     // console.log(JSON.stringify(this.newBlocActivite));
//   }

//   getNomActivite(idActivite: string): string {
//     let activite = Join.getActiviteById(this.activites, idActivite);
//     return (activite != undefined)? activite.nom : "undefined";
//   }

//   ajouterType(idType: string) {
//     if (this.contientIdType(idType)) this.supprimerIdType(idType);
//     else this.newBlocActivite.idTypeActivites.push(idType);

//     this.newBlocActivite.idActivites = [this.activitesTrie[0].id];
//     this.filtrerActivite();
//   }

//   contientIdType(idType: string) {
//     for (let type of this.newBlocActivite.idTypeActivites) {
//       if (type == idType) return true;
//     }
//     return false;
//   }

//   supprimerIdType(idType: string) {
//     let index = this.getIndexOfType(idType);
//     this.newBlocActivite.idTypeActivites.splice(index, 1);
//   }

//   getIndexOfType(idType: string): number {
//     let i = 0;
//     for (let type of this.newBlocActivite.idTypeActivites) {
//       if (type != idType) ++i;
//       else return i;
//     }
//     return -1;
//   }

//   filtrerActivite() {
//     this.activitesTrie = [];
//     for (let type of this.newBlocActivite.idTypeActivites) {
//       for (let activite of this.activites) {
//         if (activite.idTypeActivite == type) this.activitesTrie.push(activite);
//       }
//     }
//     console.log("filtre");
//   }

//   estValide(): boolean {
//     return (
//       this.newBlocActivite.nom != "" &&
//       this.newBlocActivite.idTypeActivites.length != 0
//     );
//   }

// }
