import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  @Input() label!: string;
  @Output() onChange = new EventEmitter<string>();
  input: any;

  constructor() { }

  ngOnInit(): void {
  }
   onChangeHandler(event: any) {
    console.log(event.target.value);
    this.onChange.emit(event.target.value);
  }

}
