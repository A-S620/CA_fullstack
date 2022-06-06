import {Injectable} from '@angular/core';
import {mockPoems} from "../../../mock/mock-tasks";
import IPoem from "../../model/poem";
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoemsService {

  constructor() { }
  getPoems(): Observable<IPoem[]> {
    return of(mockPoems);
  }
}
