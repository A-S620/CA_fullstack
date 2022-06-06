import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import IPoem from "../../../model/poem";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {
  @Input() poem!: IPoem;
  faTimes = faTimes;
  @Output() onDeletePoem = new EventEmitter<IPoem>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete(poem: IPoem) {
    this.onDeletePoem.emit(poem);
  }
}


