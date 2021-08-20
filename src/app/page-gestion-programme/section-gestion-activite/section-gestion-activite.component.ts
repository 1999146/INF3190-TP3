import { Component, Input, OnInit } from '@angular/core';
import { IActivite, ITypeActivite } from 'src/app/classes/interface-json/interface-session';
import { Activite } from 'src/app/classes/session';
import { Random } from 'src/app/random';
import { Join } from 'src/app/classes/methode-join';

@Component({
  selector: 'app-section-gestion-activite',
  templateUrl: './section-gestion-activite.component.html',
  styleUrls: ['./section-gestion-activite.component.scss']
})
export class SectionGestionActiviteComponent implements OnInit {

  @Input() activites!: IActivite[];
  @Input() typeActivites!: ITypeActivite[];

  constructor() { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.getActivitesByType(this.typeActivites[0].id)));
  }

  getActivitesByType(idType: string): IActivite[] {
    return Join.getActivitesByType(this.activites, idType);
  }

}
