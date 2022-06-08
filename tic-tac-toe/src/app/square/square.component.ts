import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <div class="square">
      <h1>
        {{value}}
      </h1>
      </div>
  `,
  styles: [
    `
    `
  ]
})
export class SquareComponent {
  @Input() value!: 'X' | 'O';
  constructor() { }



}
