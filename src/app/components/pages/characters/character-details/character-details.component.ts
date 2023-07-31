import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  //character$: Observable<Character>;
  character$: Observable<any>;
  //character$: any;
  constructor(
    private route:ActivatedRoute,
    private characterSvc:CharacterService,
    private location:Location,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params:any)=>{
      const id = params['id'];
      this.character$ = this.characterSvc.getDetails(id);
    });
  }

  onGoBack(): void{
    //this.location.back();
    this.router.navigate(['/'], {});
    //window.history.back
  }

}
