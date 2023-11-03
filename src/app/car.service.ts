import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  get(name: string): Observable<boolean> {
    return this.http.get<boolean>('http://localhost:3000/carExists');
  }
}
