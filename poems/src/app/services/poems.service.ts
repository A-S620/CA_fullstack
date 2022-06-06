import {Injectable} from '@angular/core';
import IPoem from "../../model/poem";
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoemsService {

  private apiURL = 'https://poetrydb.org';

  constructor(private http: HttpClient) { }
  getPoems(): Observable<IPoem[]> {
    return this.http.get<IPoem[]>(this.apiURL + '/lines/' + '?format=json');
  }
}
