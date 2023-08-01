import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Character } from '../interfaces/character.interface';
import { environment } from 'src/environments/environment';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient, ) {
  }

  searchCharacters(query = '', page=1 ){
    //return this.http.get<Character[]>(`${environment.baseUrlAPI}/?name=${query}&page=${page}`);
    const selectFilterCampo = ((<HTMLInputElement>document.getElementById("selectCampofilter"))?.value);
    alert(selectFilterCampo)
    return this.http.get<Character[]>(`https://rickandmortyapi.com/api/character/?${selectFilterCampo===undefined?'name':selectFilterCampo}=${query}&page=${page}`);
  }

  getDetails(id: number){
    //return this.http.get<Character[]>(`${environment.baseUrlAPI}/${id}`);
    return this.http.get<Character[]>(`https://rickandmortyapi.com/api/character/${id}`);
  }



}
