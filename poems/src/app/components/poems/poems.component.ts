import {Component, OnInit} from '@angular/core';
import {PoemsService} from '../../services/poems.service';
import IPoem from "../../../model/poem";


@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.css']
})
export class PoemsComponent implements OnInit {
  poems: IPoem[] = [];

  constructor(private poemService: PoemsService) {
  }


  ngOnInit(): void {
   this.poemService.getPoems().subscribe((poems) => (this.poems = poems));
  }

}
