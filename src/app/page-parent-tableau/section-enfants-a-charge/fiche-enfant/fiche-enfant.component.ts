import {Component, Input, OnInit} from '@angular/core';
import {IEnfant} from "../../../classes/interface-json/interface-enfant";

@Component({
  selector: 'app-fiche-enfant',
  templateUrl: './fiche-enfant.component.html',
  styleUrls: ['./fiche-enfant.component.scss']
})
export class FicheEnfantComponent implements OnInit {

  @Input() enfant!: IEnfant;
  @Input() adresse!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
