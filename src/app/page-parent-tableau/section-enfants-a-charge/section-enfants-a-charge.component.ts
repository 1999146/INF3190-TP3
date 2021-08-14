import {Component, Input, OnInit} from '@angular/core';
import {IEnfant} from "../../classes/interface-json/interface-parent";

@Component({
  selector: 'app-section-enfants-a-charge',
  templateUrl: './section-enfants-a-charge.component.html',
  styleUrls: ['./section-enfants-a-charge.component.scss']
})
export class SectionEnfantsAChargeComponent implements OnInit {

  @Input() enfants: IEnfant[] = [];
  @Input() adresse!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
