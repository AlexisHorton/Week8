import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComputerParts } from './computer-parts'

@Injectable({
  providedIn: 'root'
})
export class PartsApiService {

  constructor(private http: HttpClient) { }

  listParts(cb: any){
    this.http.get<ComputerParts[]>('https://localhost:44371/parts').subscribe(cb);
  }

  addPart(newpart: ComputerParts, cb: any) {
    this.http.post<ComputerParts[]>('https://localhost:44371/parts', newpart).subscribe(cb);
  }

  deletePart(id: number, cb: any) {
    this.http.delete(`https://localhost:44371/parts?id=${id}`).subscribe(cb);
  }
}
