import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { SearchByRadiusComponent } from './components/search-by-radius/search-by-radius.component';

const routes: Routes = [
  {
  path: '',
  redirectTo: '/search',
  pathMatch:'full'
  },
  {
    path: 'search',
    component: SearchComponent   
  },
  {
    path: 'search-by-radius',
    component: SearchByRadiusComponent   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
