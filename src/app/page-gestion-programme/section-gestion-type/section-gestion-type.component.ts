import { Component, Input, OnInit } from '@angular/core';
import { ITypeActivite } from 'src/app/classes/interface-json/interface-session';
import { TypeActivite } from 'src/app/classes/session';

@Component({
  selector: 'app-section-gestion-type',
  templateUrl: './section-gestion-type.component.html',
  styleUrls: ['./section-gestion-type.component.scss']
})
export class SectionGestionTypeComponent implements OnInit {

  @Input() typeActivites!: ITypeActivite[];

  constructor() { }

  ngOnInit(): void {
  }

}
