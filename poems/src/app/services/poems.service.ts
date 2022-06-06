import {Injectable} from '@angular/core';
import IPoem from "../../model/poem";
import {map, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoemsService {

  private poetryDBApi = 'https://poetrydb.org';
  private mockApi = 'http://localhost:3000/poems';

  constructor(private http: HttpClient) {
  }

  getPoemsFromDB(): Observable<IPoem[]>{
    return this.http.get<IPoem[]>(this.poetryDBApi + '/lines,poemcount/love;5')
  }
  addPoem(poem: IPoem): Observable<IPoem> {
    return this.http.post<IPoem>(this.mockApi, poem);
  }


  deletePoem(poem: IPoem): Observable<IPoem> {
    return this.http.delete<IPoem>(this.mockApi + '/' + poem.id);

  }
}
