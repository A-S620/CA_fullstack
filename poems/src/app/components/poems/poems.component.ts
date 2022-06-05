import {Component, OnInit} from '@angular/core';
import IPoem from "../../../model/poem";

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.css']
})
export class PoemsComponent implements OnInit {
  poems: IPoem[] = [{author: 'meep meep', title: 'tee hee', lines: ['hello', 'hello2'], linesCount: 0, poemCount: 0, searchTerm: ''},{author: 'meep meep', title: 'tee hee', lines: ['hello', 'hello2'], linesCount: 0, poemCount: 0, searchTerm: ''}];

  constructor() {
  }

  ngOnInit(): void {
  }

}
