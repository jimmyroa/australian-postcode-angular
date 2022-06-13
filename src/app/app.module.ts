import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//TO CONNECT APIs:
import { HttpClientModule } from '@angular/common/http';

//Para los formgroups, formGroup, Formcrontrol etc:
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { SearchByRadiusComponent } from './components/search-by-radius/search-by-radius.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchByRadiusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
