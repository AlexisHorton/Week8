import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Band } from './band';

@Injectable({
  providedIn: 'root'
})
export class BandAPIService {

  constructor(private http: HttpClient) { }

  // Get all

  getAll(cb: any) {
      this.http.get<Band[]>('https://localhost:44347/band').subscribe(cb)
  }

  // Add one

  add(newband: Band, cb: any)  {
    this.http.post<Band[]>('https://localhost:44347/band', newband).subscribe(cb);
  }

  //Delete one

  delete(id: number, cb: any) {
    this.http.delete(`https://localhost:44347/band?id=${id}`).subscribe(cb);

  }

}
