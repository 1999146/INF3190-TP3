import { Component, Input, OnInit } from '@angular/core';
import { IGabaritProgramme, IHoraire, IHorairePrograme, IProgramme, ISemaine, ISession, IActivite, IBlocActivite, ITypeActivite } from 'src/app/classes/interface-json/interface-session';
import { Programme } from 'src/app/classes/session';

@Component({
  selector: 'app-modal-creer-programme',
  templateUrl: './modal-creer-programme.component.html',
  styleUrls: ['./modal-creer-programme.component.scss']
})
export class ModalCreerProgrammeComponent implements OnInit {

  @Input() sessions!: ISession[];
  @Input() programmes!: IProgramme[];
  @Input() horairesProgrammes!: IHorairePrograme[];
  @Input() gabaritProgrammes!: IGabaritProgramme[];

  @Input() activites!: IActivite[];
  @Input() typeActivites!: ITypeActivite[];
  @Input() blocActivites!: IBlocActivite[];

  newProgramme!: IProgramme;

  constructor() { }

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    if (this.newProgramme == undefined) this.newProgramme = new Programme(this.gabaritProgrammes[0].id, "", 0);
    else this.newProgramme = new Programme(this.newProgramme.idGabaritProgramme, "", 0);
  }

  



}
