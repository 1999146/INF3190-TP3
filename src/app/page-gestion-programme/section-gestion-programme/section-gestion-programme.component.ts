import { Component, Input, OnInit } from '@angular/core';
import { IHorrairePrograme, IProgramme, ISession } from 'src/app/classes/interface-json/interface-session';
import { Horraire, HorrairePrograme } from 'src/app/classes/session';

@Component({
  selector: 'app-section-gestion-programme',
  templateUrl: './section-gestion-programme.component.html',
  styleUrls: ['./section-gestion-programme.component.scss']
})
export class SectionGestionProgrammeComponent implements OnInit {

  @Input() sessions!: ISession[] | undefined;
  @Input() programmes!: IProgramme[];
  @Input() horrairesProgrammes!: IHorrairePrograme[];

  constructor() { 
    // this.horraireProgrammes.push(
    //   new HorrairePrograme(
    //     "P0_S21", [
    //       new Horraire("4531818738713327", 1, 2), 
    //       new Horraire("7129264949321758", 2, 2), 
    //       new Horraire("2175904346409182", 3, 2), 
    //       new Horraire("7731215965469501", 4, 2), 
    //     ]
    //   )
    // );

    // this.horraireProgrammes.push(
    //   new HorrairePrograme(
    //     "P0_S20", [
    //       new Horraire("7129264949321758", 1, 2), 
    //       new Horraire("4531818738713327", 2, 2), 
    //       new Horraire("2175904346409182", 3, 2), 
    //       new Horraire("7731215965469501", 4, 2), 
    //     ]
    //   )
    // );

    // this.horraireProgrammes.push(
    //   new HorrairePrograme(
    //     "P1_S20", [
    //       new Horraire("446500223453832", 1, 8), 
    //     ]
    //   )
    // );

    // this.horraireProgrammes.push(
    //   new HorrairePrograme(
    //     "P1_S21", [
    //       new Horraire("446500223453832", 1, 4), 
    //       new Horraire("446500223453832", 2, 4), 
    //     ]
    //   )
    // );

    // this.horraireProgrammes.push(
    //   new HorrairePrograme(
    //     "P1_S22", [
    //       new Horraire("446500223453832", 1, 3), 
    //       new Horraire("6379695551642011", 2, 1), 
    //       new Horraire("446500223453832", 3, 4), 
    //     ]
    //   )
    // );

    // console.log(JSON.stringify(this.horraireProgrammes));
    // console.log(JSON.stringify(this.sessions));
  }

  ngOnInit(): void {
  }

}
