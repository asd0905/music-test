import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {
    LocationStrategy,
    HashLocationStrategy,
    APP_BASE_HREF
} from '@angular/common';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot(routes) // <--routes
  ],
  providers: [
      {provide: APP_BASE_HREF, useValue: '/'},
      {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
