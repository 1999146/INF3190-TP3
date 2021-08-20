import { Component, Input, OnInit } from '@angular/core';
import { ISession } from 'src/app/classes/interface-json/interface-session';

@Component({
  selector: 'app-section-gestion-session',
  templateUrl: './section-gestion-session.component.html',
  styleUrls: ['./section-gestion-session.component.scss']
})
export class SectionGestionSessionComponent implements OnInit {

  @Input() sessions!: ISession[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
