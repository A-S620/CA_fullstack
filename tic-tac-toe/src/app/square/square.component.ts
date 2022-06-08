import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value" >{{value}}</button>
    <button nbButton hero *ngIf="value == 'X'" status="success" >{{value}}</button>
    <button nbButton hero *ngIf="value == 'O'" status="info" >{{value}}</button>

  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; color: purple }']
})
export class SquareComponent {
  @Input() value!: 'X' | 'O';
  constructor() { }



}
