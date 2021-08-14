import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-enfants-a-charge',
  templateUrl: './section-enfants-a-charge.component.html',
  styleUrls: ['./section-enfants-a-charge.component.scss']
})
export class SectionEnfantsAChargeComponent implements OnInit {

  @Input() enfants: any;
  @Input() adresse: any;

  constructor() { }

  ngOnInit(): void {
  }

}
