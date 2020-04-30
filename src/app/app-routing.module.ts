import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { HomeComponent } from './components/home/home.component'
import { CardListComponent } from './components/card-list/card-list.component'


const ROUTES: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'results/:type', component: CardListComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
