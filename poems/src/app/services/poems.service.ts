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

  constructor(private http: HttpClient) { }
  getPoems(): Observable<IPoem[]> {
    this.http.get<IPoem[]>(this.poetryDBApi +'/lines/love').pipe(
      map(poems => poems.map(poem => {
        console.log(poem);
        this.http.post(this.mockApi + '/' + poem.title, poem);
      }))
    );
    return this.http.get<IPoem[]>(this.mockApi);
  }

  deletePoem(poem: IPoem):Observable<IPoem> {
    return this.http.delete<IPoem>(this.mockApi + '/' + poem.title);

  }
}
