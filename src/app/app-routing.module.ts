import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { DetailsComponent } from './components/details/details.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

const routes: Routes = [
  {
    path: '',
    component: CountriesComponent,
    children:[
      {path: '', component: SearchBarComponent},
      {path: 'home', component: FilterComponent},
    ]
  },
  {
    path: 'name/:country:search',
    component: CountriesComponent,
  },
  {
    path: 'region/:country:filter',
    component: CountriesComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
