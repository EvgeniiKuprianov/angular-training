import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {trigger, transition, animate, style, state} from '@angular/animations';

@Component({
  selector: 'vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss'],
  animations: [
    trigger('openClose', [
        state('open', style({
            height: '*',
            opacity: 1,
        })),
        state('closed', style({
            height: '0',
            opacity: 0
        })),
        transition('open => closed', [
            animate('0.35s')
        ]),
        transition('closed => open', [
            animate('0.35s')
        ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleCardComponent implements OnInit {

  showInformation: boolean = false;
  @Input() carInformation: any;  

  constructor() { }

  openTab(): void {
    this.showInformation = !this.showInformation;
  }

  ngOnInit(): void {
  }

}
