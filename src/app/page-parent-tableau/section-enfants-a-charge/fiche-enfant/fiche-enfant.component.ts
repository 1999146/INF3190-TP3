import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fiche-enfant',
  templateUrl: './fiche-enfant.component.html',
  styleUrls: ['./fiche-enfant.component.scss']
})
export class FicheEnfantComponent implements OnInit {

  @Input() enfant: any;
  @Input() adresse: any;

  constructor() { }

  ngOnInit(): void {
  }

}
