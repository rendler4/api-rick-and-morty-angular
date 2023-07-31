import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';
import {NgxPaginationModule} from 'ngx-pagination';


const myComponents = [CharacterDetailsComponent, CharacterListComponent];
@NgModule({
  declarations: [
    ...myComponents
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports: [
    ...myComponents
  ]
})
export class CharactersModule { }
