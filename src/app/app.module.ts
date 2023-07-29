import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { SearchFormComponent } from './components/partials/search-form/search-form.component';
import { FormSearchComponent } from './components/partials/form-search/form-search.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    HeaderComponent,
    SearchFormComponent,
    FormSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
