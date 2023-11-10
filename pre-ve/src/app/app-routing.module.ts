import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyComponent } from './key/key.component';
import { VediComponent } from './vedi/vedi.component';

const routes: Routes = [
  {path:'key',component:KeyComponent},
  {path:'vedi/:id', component:VediComponent},
  {path:'',redirectTo:'key',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
