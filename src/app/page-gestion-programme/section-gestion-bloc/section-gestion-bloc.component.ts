import { Component, Input, OnInit } from '@angular/core';
import { IBlocActivite, IActivite, ITypeActivite } from 'src/app/classes/interface-json/interface-session';
import { Join } from 'src/app/classes/methode-join';

@Component({
  selector: 'app-section-gestion-bloc',
  templateUrl: './section-gestion-bloc.component.html',
  styleUrls: ['./section-gestion-bloc.component.scss']
})
export class SectionGestionBlocComponent implements OnInit {

  @Input() activites!: IActivite[];
  @Input() typeActivites!: ITypeActivite[];
  @Input() blocActivites!: IBlocActivite[];

  constructor() { }

  ngOnInit(): void {
  }

  getActivites(blocActivite: IBlocActivite): IActivite[] {
    let activites: IActivite[] = [];
    for (let idActivite of blocActivite.idActivites) {
      let activite = Join.getActiviteById(this.activites, idActivite);
      if (activite != undefined) activites.push(activite);
    }
    return activites;
  }

  getTypeActivites(blocActivite: IBlocActivite): ITypeActivite[] {
    let typeActivites: ITypeActivite[] = [];
    for (let idTypeActivite of blocActivite.idTypeActivites) {
      let typeActivite = Join.getTypeActiviteById(this.typeActivites, idTypeActivite);
      if (typeActivite != undefined) typeActivites.push(typeActivite);
    }
    return typeActivites;
  }

}
