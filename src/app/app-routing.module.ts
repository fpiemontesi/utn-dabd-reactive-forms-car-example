import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCarComponent } from './new-car/new-car.component';

const routes: Routes = [
  {
    path: 'cars/new',
    component: NewCarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
