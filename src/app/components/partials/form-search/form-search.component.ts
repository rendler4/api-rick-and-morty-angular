import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  template:   `
  <input
  #inputSearch
  autofocus
  type="text"
  class = 'form-control-lg'
  placeholder="Buscar..."
  (input)="onSearch(inputSearch.value)"
  >`,
  //styleUrls: ['./form-search.component.css']
  styles: ['input {width: 50%; border-radius: 15px}']
})
export class FormSearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public campoFilter:string = ''

  onSelectedCampoFilter(){

  }

  onSearch(value: string){
    //TODO
    console.log('Buscar ->', value);
    if(value && value.length > 3){
      this.router.navigate(['/character-list'], {
        queryParams: { q:value }
      });
    }else if(value.length === 0){
      this.router.navigate(['/'], {});
    }
  }

}
