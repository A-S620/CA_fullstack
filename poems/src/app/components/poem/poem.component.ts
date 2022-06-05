import { Component, OnInit, Input } from '@angular/core';
import IPoem from "../../../model/poem";

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {
  @Input() poem!: IPoem;

  constructor() { }

  ngOnInit(): void {
  }

}
