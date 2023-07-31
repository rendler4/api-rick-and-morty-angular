import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FormSearchComponent } from './components/partials/form-search/form-search.component';
import { HttpClientModule } from '@angular/common/http';

import {NgxPaginationModule} from 'ngx-pagination';

// Add these two
import { SplashScreenComponent } from './components/shared/splash-screen/splash-screen/splash-screen.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';


// Export this function
/*export function playerFactory(): any {
  return import('lottie-web');
}*/

export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormSearchComponent,
    SplashScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
