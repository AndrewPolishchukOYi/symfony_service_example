import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './modules/food';

const routes: Routes = [
  { path: '', component: FoodComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
