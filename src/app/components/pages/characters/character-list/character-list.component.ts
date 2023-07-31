import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { CharacterService } from 'src/app/services/character.service';
import { take, filter } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
type RequestInfo = {
  next:any;
};
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  public characters: Character[] = [];

  info: RequestInfo = {
    next: null,
  };

  private pageNum = 1;
  private query: string = '';
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(
    private characterSvc: CharacterService,
    private route:ActivatedRoute,
    private router:Router
    ) {
      this.onUrlChaged();
    }

  ngOnInit(): void {
    //this.getDataFromService();
    this.getCharactersByQuery();
  }

  private onUrlChaged(): void {
    //router
    this.router.events.pipe(
      filter((event)=> event instanceof NavigationEnd))
      .subscribe(()=> {
        this.characters = [];
        this.pageNum = 1;
        this.getCharactersByQuery();
      })
  }

  private getCharactersByQuery():void{
    //route
    this.route.queryParams
      .pipe(take(1)).subscribe((params:any)=>{
        console.log('params->', params)
        this.query = params['q']
        this.getDataFromService();
      })
  }

  private getDataFromService():void{
    this.characterSvc
        .searchCharacters(this.query, this.pageNum)
        .pipe(take(1))
        .subscribe((res: any) => {
          console.log('Response->', res);
          if(res?.results?.length){
          const { info, results } = res;
          this.characters = [ ...this.characters , ...results ]
          this.info = info;
          }else{
            this.characters = [];
          }
        })
  }

}
