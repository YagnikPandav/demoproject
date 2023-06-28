import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { FirstComponent } from './first/first.component';
import { SecoundComponent } from './secound/secound.component';

const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'secound', component: SecoundComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
