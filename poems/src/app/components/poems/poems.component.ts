import {Component, OnInit} from '@angular/core';
import {PoemsService} from '../../services/poems.service';
import IPoem from "../../../model/poem";
import {Observable} from "rxjs";


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
    this.poemService.getPoemsFromDB().subscribe((poems) => {
      poems.forEach(poem => {
        poem.id = (poem.title as string).replace(/\s+/g, '');
        this.poemService.addPoem(poem)
        this.poems.push(poem);
      })
    });
  }
  deletePoem(poem: IPoem) {
    //TODO: delete poem from mock api
    this.poemService.deletePoem(poem).subscribe(() => {
      this.poems = this.poems.filter(p => p.id !== poem.id);
    });
  }

}
